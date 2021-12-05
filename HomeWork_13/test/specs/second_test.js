describe('Hovering element', () => {
    it('Find element with image', () => {
    browser.url('http://the-internet.herokuapp.com/hovers');
    let elem = $('div .figure:first-of-type').moveTo();
    let elem2 = $('h5');
    elem2.waitForDisplayed();
    expect(elem2.getText()).toBe('name: user1');
    })
})