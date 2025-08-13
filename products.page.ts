// pages/products.page.ts
import { Page, Locator } from '@playwright/test';

export class ProductsPage {
constructor(private page: Page) {}

get sortSelect(): Locator { return this.page.locator('[data-test="product_sort_container"]'); }
get priceCells(): Locator { return this.page.locator('.inventory_item_price'); }
get nameCells(): Locator { return this.page.locator('.inventory_item_name'); }

async open() {
// Assumes you’re already logged in and redirected to /inventory.html
await this.page.waitForURL('**/inventory.html');
}

/**
* option values (SauceDemo):
* - "az" : Name (A to Z)
* - "za" : Name (Z to A)
* - "lohi" : Price (low to high)
* - "hilo" : Price (high to low)
*/
async selectSort(option: 'az'|'za'|'lohi'|'hilo') {
await this.sortSelect.selectOption(option);
}

async getPrices(): Promise<number[]> {
const texts = await this.priceCells.allInnerTexts(); // e.g. ["$29.99", "$9.99", ...]
return texts.map(t => Number(t.replace('$','')));
}
get cartLink(): Locator{
    return this.page.locator('.shopping_cart_link');
}
itemByName(name: string): Locator{
    return this.page.locator('.inventory_item').filter({hasText:name});
}
async getNames(): Promise<string[]> {
return this.nameCells.allInnerTexts();
}
addToCartButton(name:string):Locator{
    return this.itemByName(name).locator('button:has-text("Add to Cart")');
}
async addItem(name: string) {
return this.addToCartButton(name).click();
}
async openCart(){
    await this.cartLink.click();
}
}