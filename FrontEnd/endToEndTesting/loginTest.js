describe('LoginPage', function () {
  it('should set user data in local storage', function () {
    browser.get('http://localhost:4200/onboard');
    browser.executeScript("window.localStorage.clear();");
    const 
    element(by.id('firstNameInput')).sendKeys(userName);
    expect(element(by.id('firstNameInput')).getAttribute('value')).toBe(user)
    element(by.buttonText('Log In')).click();

    setTimeout(function () { }, 5000);
    var value = browser.executeScript("return window.localStorage.getItem('userId');");
    expect(value).toBe('2');
  });
});