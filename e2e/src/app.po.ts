/*
 * Copyright (C) 2020  Christian Garbs <mitch@cgarbs.de>
 * Licensed under GNU GPL v3 or later.
 *
 * This file is part of Wild Cards.
 *
 * Wild Cards is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wild Cards is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wild Cards.  If not, see <http://www.gnu.org/licenses/>.
 */

import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/') as Promise<unknown>;
  }

  getTitleText(){
    return element(by.xpath('//h1[.="Log In"]'));
  }

  public get amazonLogo(): ElementFinder {
    return element(by.xpath("//body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/a[1]"));
  }

  public get emailInput(): ElementFinder {
    return element(by.xpath("//body[1]/div[1]/div[1]/div[2]/form[1]/input[1]"));
  }

  public get passwordInput(): ElementFinder {
    return element(by.xpath("//input[@placeholder='Password']"));
  }


  public get SelectSchool(): ElementFinder {
    return element(by.xpath('//li[contains(text(),"Production Test")]'));
  }

  public get ClickGroup(): ElementFinder {
    return element(by.xpath("//div[contains(text(),'Select Group')]"));
  }
  
  public get SelectGroup(): ElementFinder {
    return element(by.xpath("//li[contains(text(),'Class A')]"));
  }

  public get loginButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'LOG IN')]"));
  }

  public get textAreaForPost(): ElementFinder {
    return element(by.xpath('//*[@id="newTextInput"]'));
  }

  public get searchProductArea(): ElementFinder {
    return element(by.xpath('//*[@id="twotabsearchtextbox"]'));
    
}

public get loginLink(): ElementFinder {
  return element(by.xpath("//body[1]/div[1]/header[1]/div[1]/div[1]/div[3]/div[1]/a[2]/div[1]/span[1]"));
}
}
