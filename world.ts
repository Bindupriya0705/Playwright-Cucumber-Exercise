import { IWorldOptions, setWorldConstructor, World as CucumberWorld  } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

export class World extends CucumberWorld{
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  login!: LoginPage;
  constructor(opts: IWorldOptions){
    super(opts);
  }
}
setWorldConstructor(World);