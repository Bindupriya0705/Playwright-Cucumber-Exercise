import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { World } from '../support/world';
import { CheckoutPage } from '../pages/Checkout.page';

Then('I should see checkout error {string}', async function (this: World, msg: string) {
const checkout = new CheckoutPage(this.page);
await expect(checkout.error).toContainText(msg);
});
