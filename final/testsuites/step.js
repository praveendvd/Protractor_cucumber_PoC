var { Given } = require('cucumber');

Given('I navigates to google', async function () {
  await browser.get('https://www.google.com/');
});

Given('searches for {string}', async function (searchValue) {
  await element(by.css('input[role="combobox"]')).sendKeys(searchValue)
});

Given('I should see {string}', async function (expectedValue) {
  expect(expectedValue).to.equal('pass')
});
