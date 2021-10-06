
import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from 'rxjs/internal/scheduler/async';

describe('protractor test', () => {
  let page = new AppPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    browser.driver.manage().window().maximize();
    page.navigateTo();
  });

  it('should display title screen', () => {
    expect(page.getTitleText());
    expect(browser.isElementPresent(page.amazonLogo));
    // page.school.sendKeys("St production");    
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
});
