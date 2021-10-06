
import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from 'rxjs/internal/scheduler/async';

describe('Search charger test', () => {
  let page = new AppPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    browser.driver.manage().window().maximize();
    page.navigateTo();
  });

  it('should search charger', () => {
    expect(browser.isElementPresent(page.amazonLogo));
    expect(browser.isElementPresent(page.searchProductArea));
    page.searchProductArea.sendKeys('Phone charger');
    browser.sleep(3000);
  });
});
