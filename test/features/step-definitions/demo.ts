
import { Given } from "@wdio/cucumber-framework";

Given(/^I open the google search page$/, async function () {
  console.log("🟡 Before open the google search page");
  await  browser.url("https://www.google.com");
  await browser.pause(5000);
  console.log("🟡 After open the google search page");
});
