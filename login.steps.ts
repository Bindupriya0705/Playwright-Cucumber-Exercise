import {Given, When, Then } from '@cucumber/cucumber';
import type {World } from '../support/world';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

Given ('I am on the login page', async function (this:World) {
  this.login = new LoginPage(this.page);
});
When('I try to login with username {string} and password {string}', async function (this: World, u:string, p:string) {
this.login = new LoginPage(this.page);
  await this.login.login(u,p);  
});

Then('I should see the login error {string}', async function (this: World, msg: string) {
  await expect(this.login.error).toContainText(msg  );
});

