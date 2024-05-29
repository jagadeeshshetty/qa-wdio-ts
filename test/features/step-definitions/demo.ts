
import { Given } from "@wdio/cucumber-framework";

Given(/^I open the google search page$/, function () {
  browser.url("https://www.google.com");
  browser.debug();
});
