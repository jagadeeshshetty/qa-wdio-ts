
import { Given, When } from "@wdio/cucumber-framework";

Given(/^I open the google search page$/, async function () {
  console.log("🟡 Before open the google search page");
  await  browser.url("https://www.google.com");
  console.log("🟡 After open the google search page");
});

When(/^I search with (.*) keyword$/, async function (searchText) {
  const searchEditbox = await $('//textarea[@title="Search"]');
  searchEditbox.setValue(searchText);
  await browser.keys('Enter');
  await browser.pause(5000);
});
// And I click on the first search result
// Then the URL should match <expectedURL>
