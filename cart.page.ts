import { Page, Locator } from "@playwright/test";

export class CartPage {
    
    constructor(private page: Page){}
    get checkout():Locator{return this.page.locator('[data-test="checkout"]');}
    async proceedToCheckout(){
        await this.checkout.click();
    }
}