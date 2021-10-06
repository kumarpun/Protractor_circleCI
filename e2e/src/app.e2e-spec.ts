import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from 'rxjs/internal/scheduler/async';

describe('workspace-project WildCards', () => {
  let page = new AppPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    browser.driver.manage().window().maximize();
    page.navigateTo();
  });

  it('should search t-shirt', () => {
    expect(page.getTitleText());
    expect(browser.isElementPresent(page.amazonLogo));
    expect(browser.isElementPresent(page.searchProductArea));
    page.searchProductArea.sendKeys('t-shirt');
    browser.sleep(3000);
    // page.SelectSchool.click();
    // page.ClickGroup.click();
    // page.SelectGroup.click();
    // page.emailInput.sendKeys('kumar1');
    // page.passwordInput.sendKeys('qwertyuiop');
    // page.loginButton.click();
    // browser.sleep(5000);
    // page.textAreaForPost.click();
    // page.textAreaForPost.sendKeys('test from circle ci in production class');
    // page.PostButton.click();
    // browser.sleep(5000);
  });

  it('should search macbook pro', () => {
    expect(page.getTitleText());
    expect(browser.isElementPresent(page.amazonLogo));
    expect(browser.isElementPresent(page.searchProductArea));
    page.searchProductArea.sendKeys('macbook pro');
    browser.sleep(3000);
  });
});
