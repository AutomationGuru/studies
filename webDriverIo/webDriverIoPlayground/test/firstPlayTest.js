describe('This is to write meaningless tests to play using google ', () => {

    it('Get To google and assert the title', async () => {
        await browser.url('/');
        await browser.getTitle().then((title) => {
            console.log('Title was: ' + title);
            title.should.equal("Google")
        })
    });

    it('Get To made.com  and show the title', async () => {
        await browser.url('/');
        let searchInputBox = await $("//*[@name='q']");

        searchInputBox.click();
        searchInputBox.addValue("12222222");
        searchInputBox.setValue("NEW VALUE")
        browser.pause(3000);
        assert.equal(await searchInputBox.isExisting(), true);
        assert.equal(await searchInputBox.isDisplayed(), true);
        assert.equal(await searchInputBox.isFocused(), true);
        assert.equal(await searchInputBox.isSelected(), false); // CheckBox or radio button only
        let searchButton = await $("//*[@value='Google Search']");
        assert.equal(await searchButton.isEnabled(), true);
        browser.keys("\uE007");
        let resultStats = $('#resultStats')
        resultStats.waitForExist(3000);
        assert.equal(await resultStats.isDisplayed(), true);
        assert.equal(await searchButton.isDisplayedInViewport(), true);
    });



});


