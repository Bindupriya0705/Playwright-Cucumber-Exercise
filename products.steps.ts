// steps/product.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { World } from '../support/world';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';

Given('I am logged into the products page', async function (this: World) {
const login = new LoginPage(this.page);
await login.open();
await login.login('standard_user', 'secret_sauce');
const products = new ProductsPage(this.page);
await products.open();
});

When('I sort products by {string}', async function (this: World, option: string) {
const products = new ProductsPage(this.page);
await products.selectSort(option as 'lohi'|'hilo'|'az'|'za');
});

Then('the prices should be in {string} order', async function (this: World, order: string) {
const products = new ProductsPage(this.page);
const prices = await products.getPrices();
const sorted = [...prices].sort((a,b) => order.toLowerCase().startsWith('asc') ? a - b : b - a);
expect(prices, `Prices not in ${order} order: ${prices.join(', ')}`).toEqual(sorted);
});

Then('the first product should be {string} and the last should be {string}', async function (this: World, first: string, last: string) {
const products = new ProductsPage(this.page);
const names = await products.getNames();
expect(names[0]).toBe(first);
expect(names[names.length - 1]).toBe(last);
});

Then('the selected sort option should be {string}', async function (this: World, expected: string) {
const products = new ProductsPage(this.page);
await expect(products.sortSelect).toHaveValue(expected);
});