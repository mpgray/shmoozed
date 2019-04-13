import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Buyers and sellers BOTH win!');
  });
});

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
