describe('This is to write meaningless tests to play ', () => {
    it('Get To google and show the title', async () => {
        await browser.url('/');
        await browser.getTitle().then((title) => {
            console.log('Title was: ' + title);
        })
    });

    it('Get To made.com  and show the title', async () => {
        await browser.url('/');
        await browser.getTitle().then((title) => {
            console.log('Title was: ' + title);
        })
    });

});


