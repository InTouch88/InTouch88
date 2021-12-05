describe ('Element active state', function() {
    it('Get dropdown', function() {
        browser.url('http://the-internet.herokuapp.com/dropdown');
        let elem = $("#dropdown");
    });
    it('Check that first <option> is disabled', function() {
        browser.url('http://the-internet.herokuapp.com/dropdown');
        let elem = $("#dropdown > option:first-of-type").isEnabled();
        expect(elem).toBe(false);
    });
    it('Check that 2nd <option> is enabled', function() {
        browser.url('http://the-internet.herokuapp.com/dropdown');
        let elem = $("#dropdown > option:nth-of-type(2)").isEnabled();
        expect(elem).toBe(true);
    })
});