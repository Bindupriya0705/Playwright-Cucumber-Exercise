import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {

    private username: Locator;
    private password: Locator;
    private loginBtn: Locator;
    //private url: string;
    readonly error: Locator;

    constructor(private page: Page){
    
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.error = page.locator('[data-test="error"]');
    }
   readonly url = 'https://www.saucedemo.com/';
   
async login(user: string, pass: string) {
     await this.page.goto(this.url);
     await expect(this.page).toHaveURL(/saucedemo/);
     await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
}
async open()
{
    await this.page.goto(this.url);
}
}