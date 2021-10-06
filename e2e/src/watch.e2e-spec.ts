
import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from 'rxjs/internal/scheduler/async';

describe('Search watch test', () => {
  let page = new AppPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    browser.driver.manage().window().maximize();
    page.navigateTo();
  });

  fit('should view watch detail', () => {
    expect(browser.isElementPresent(page.amazonLogo));
    expect(browser.isElementPresent(page.searchProductArea));
    page.searchProductArea.sendKeys('watch for men');
    browser.sleep(3000);
    page.searchIcon.click();
    expect(browser.isElementPresent(page.watchLink));
    page.watchLink.click();
    browser.sleep(3000);
  });
});
