// pages/checkout.page.ts
import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
constructor(private page: Page) {}

get firstName(): Locator { return this.page.locator('[data-test="firstName"]'); }
get lastName(): Locator { return this.page.locator('[data-test="lastName"]'); }
get postal(): Locator { return this.page.locator('[data-test="postalCode"]'); }
get continueBtn(): Locator { return this.page.locator('[data-test="continue"]'); }
get finishBtn(): Locator { return this.page.locator('[data-test="finish"]'); }
get error(): Locator { return this.page.locator('[data-test="error"]'); }

get completeHeader(): Locator { return this.page.locator('.complete-header'); }
get completeText(): Locator { return this.page.locator('.complete-text'); }


async fillInfo(first: string, last: string, zip: string) {
await this.firstName.fill(first);
await this.lastName.fill(last);
await this.postal.fill(zip);
await this.continueBtn.click();
}

async finishOrder() { await this.finishBtn.click(); }
}