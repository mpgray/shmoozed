import { browser, by, element } from 'protractor';

describe('Login Page', () => {
  it('should set user data in local storage', () => {
    browser.get('http://localhost:4200/onboard');
    browser.executeScript('window.localStorage.clear();');
    const username = 'oneworkingexample';
    element(by.id('usernameInput')).clear();
    element(by.id('usernameInput')).sendKeys(username);
    const userButton = element(by.id('loginButton'));
    userButton.click();
    browser.sleep(1000);

    const value = browser.executeScript('return window.localStorage.getItem(\'userId\');');
    expect(value).toBe('29');
  });
});
