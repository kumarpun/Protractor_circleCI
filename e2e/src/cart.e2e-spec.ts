
import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from 'rxjs/internal/scheduler/async';

describe('Add to cart test', () => {
  let page = new AppPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    browser.driver.manage().window().maximize();
    page.navigateTo();
  });

  fit('should display cart screen', () => {
    expect(browser.isElementPresent(page.amazonLogo));
    page.cartLink.click();
    browser.sleep(3000);
  });
});
