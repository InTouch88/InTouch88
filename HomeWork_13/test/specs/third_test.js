describe('Form verification', () => {
    it('Sumbit the form', () => {
    browser.url('http://formy-project.herokuapp.com/form');
    $('#first-name').setValue('Peter');
    $('#last-name').setValue('Peterson');
    $('#job-title').setValue('tester');
    $('#radio-button-1').click();
    $('#checkbox-1').click();
    let dropdown = $('#select-menu');
    dropdown.selectByAttribute('value', '2');
    $('#datepicker').setValue('12/12/2020');
    $('a.btn').click();
    let alert = $('div.alert');
    alert.waitForDisplayed();
    expect(alert.getText()).toBe('The form was successfully submitted!');
    })
})