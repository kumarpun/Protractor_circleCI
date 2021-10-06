
import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from 'rxjs/internal/scheduler/async';

describe('Search phone test', () => {
  let page = new AppPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    browser.driver.manage().window().maximize();
    page.navigateTo();
  });

  it('should display title screen', () => {
    expect(browser.isElementPresent(page.amazonLogo));
    expect(browser.isElementPresent(page.searchProductArea));
    page.searchProductArea.sendKeys('iPhone');
    browser.sleep(3000);
  });
});
