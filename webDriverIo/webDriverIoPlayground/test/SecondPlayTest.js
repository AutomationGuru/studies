describe("Verify whether webdriveruniversity links on homepage work correctly", () => {
	it.skip("check that the contact us button opens the contact us page", async () => {
		await browser.url('/');
		var title = await browser.getTitle();
		expect(title).to.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);
		await browser.click("#contact-us");
	});

	it.skip("check that the login button opens the login portal page", async () => {
		await browser.url('/');
		await browser.click('#login-portal');
		var title = await browser.getTitle();
		title.should.equal('WebDriverUniversity.com');
		await console.log('Title is: ' + title);
	});
});
