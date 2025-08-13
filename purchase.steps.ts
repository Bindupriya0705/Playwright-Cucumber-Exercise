// steps/purchase.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { World } from '../support/world';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/Checkout.page';

Given('I login as {string} with password {string}', async function (this: World, user: string, pass: string) {
const login = new LoginPage(this.page);
await login.open();
await login.login(user, pass);
await this.page.waitForURL('**/inventory.html');
});

When('I add product {string} to the cart', async function (this: World, name: string) {
const products = new ProductsPage(this.page);
await products.addItem(name);
});

When('I add the following products to the cart:', async function (this: World, dataTable) {
const products = new ProductsPage(this.page);
for (const { name } of dataTable.hashes()) {
await products.addItem(name);
}
});

When('I proceed to checkout', async function (this: World) {
const products = new ProductsPage(this.page);
const cart = new CartPage(this.page);
await products.openCart();
await cart.proceedToCheckout();
});

When('I enter shipping info {string} {string} {string}', async function (this: World, first: string, last: string, zip: string) {
const checkout = new CheckoutPage(this.page);
await checkout.fillInfo(first, last, zip);
});

When('I place the order', async function (this: World) {
const checkout = new CheckoutPage(this.page);
await checkout.finishOrder();
});

Then('I should see the purchase success text {string}', async function (this: World, expected: string) {
const checkout = new CheckoutPage(this.page);
await expect(checkout.completeHeader).toHaveText(expected); // "THANK YOU FOR YOUR ORDER"
});