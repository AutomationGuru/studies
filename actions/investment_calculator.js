const axios = require('axios');
const { Parser } = require('json2csv');
const fs = require('fs');
const API_KEY = 'your_alpha_vantage_api_key';

const start_date = '2021-10-01';
const monthly_investment = 2000;

// Function to get S&P 500 data from Alpha Vantage API
async function getSP500Data() {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=SPY&apikey=${API_KEY}`;
    const response = await axios.get(url);
    return response.data['Monthly Adjusted Time Series'];
}

// Function to calculate investment value
async function calculateInvestment() {
    const sp500Data = await getSP500Data();
    let totalUnits = 0;
    let investmentDetails = [];

    for (let date in sp500Data) {
        if (date >= start_date) {
            const adjustedClose = parseFloat(sp500Data[date]['5. adjusted close']);
            const unitsPurchased = monthly_investment / adjustedClose;
            totalUnits += unitsPurchased;
            investmentDetails.push({
                Date: date,
                'Adjusted Close Price': adjustedClose.toFixed(2),
                'Units Purchased': unitsPurchased.toFixed(4),
                'Total Units': totalUnits.toFixed(4),
                'Investment Value': (totalUnits * adjustedClose).toFixed(2)
            });
        }
    }

    const currentValue = totalUnits * parseFloat(sp500Data[Object.keys(sp500Data)[0]]['5. adjusted close']);
    console.log(`Total value of investment as of today: $${currentValue.toFixed(2)}`);

    // Write the details to a CSV file
    const parser = new Parser();
    const csv = parser.parse(investmentDetails);
    fs.writeFileSync('investment_summary.csv', csv);
    console.log('Detailed investment summary written to investment_summary.csv');
}

calculateInvestment();

