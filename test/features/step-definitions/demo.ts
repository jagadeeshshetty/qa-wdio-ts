
import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";

/**
 * Navigates to the Google search page.
 *
 * @example
 * Scenario:
 * Given I navigate to the Google search page
 */
Given(/^I navigate to the Google search page$/, async function () {
  console.log("🟡 Before open the google search page");
  await  browser.url("https://www.google.com");
  console.log("🟡 After open the google search page");
});

/**
 * Searches for the given text on Google.
 *
 * @param {string} searchText The text to search for.
 *
 * @example
 * Scenario:
 * When I search for "Selenium WebDriver"
 */
When(/^I search for(.*)$/, async function (searchText) {
  const searchEditbox = await $('//textarea[@title="Search"]');
  searchEditbox.setValue(searchText);
  // await browser.keys("Enter");
  const googleSearchButton = await $('(//input[@type="submit" and @value="Google Search"])[1]');
  await browser.pause(5000);
  await googleSearchButton.click();
  await browser.pause(5000);
});

/**
 * Clicks on the first search result.
 *
 * @example
 * Scenario:
 * When I click on the first search result
 */
When(/^I click on the first search result$/, async function () {
  (await $("//h3")).click();
})

/**
 * Asserts that the current URL matches the expected URL.
 *
 * @param {string} expUrl The expected URL.
 *
 * @example
 * Scenario:
 * Then the URL should match "https://www.selenium.dev/"
 */
Then(/^the URL should match (.*)$/, async function (expUrl) {
  let url = await browser.getUrl();
  console.log(url);
  expect(url).to.equal(expUrl);
});
