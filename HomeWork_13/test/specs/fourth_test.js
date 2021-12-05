describe('Table sorting', () => {
    it('Scroll to the table2', () => {
        browser.url('http://the-internet.herokuapp.com/tables');
        $('#table2').scrollIntoView();
        let dues = $$('td.dues');
        let arr = [];
        for(let i = 0; i < dues.length; i++) {
            arr.push(dues[i].getText().replace(/\D+/, ''));
        }
        let sorted = arr.sort(function(a, b){return a - b});
        let headers = $$('#table2 th');
        headers[3].click();
        browser.pause(1000);
        let dues2 = $$('td.dues');
        let arr2 = [];
        for(let i = 0; i < dues2.length; i++) {
            arr2.push(dues2[i].getText().replace(/\D+/, ''));
        }
        expect(arr2).toEqual(sorted);
    })
})