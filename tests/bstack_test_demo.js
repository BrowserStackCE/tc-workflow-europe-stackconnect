const { expect,test } = require('@playwright/test');
//const {test} = require('../fixture.js')
const { percyScreenshot } = require("@percy/playwright");

test('Browserstack playwright demo', async ({ page }) => {
  const baseUrl = 'https://the-internet.herokuapp.com/';

  await page.goto(baseUrl);

  await page.waitForTimeout(10000);

  await expect(page).toHaveTitle('The Internet');

  await page.getByRole('link', { name: 'Checkboxes' }).click();

  await page.waitForTimeout(10000);

  const checkbox1 = page.getByRole('checkbox').first();
  const checkbox2 = page.getByRole('checkbox').last();

  await page.waitForTimeout(10000);

  expect(await checkbox1.isChecked()).toBe(false);
  await checkbox1.check();
  expect(await checkbox1.isChecked()).toBe(true);

  expect(await checkbox2.isChecked()).toBe(true);
  await checkbox2.uncheck();
  expect(await checkbox2.isChecked()).toBe(false);

  await page.waitForTimeout(10000);

  //await percyScreenshot(page, "Screenshot 1", {fullPage: true});

  await page.goto(baseUrl);
  await page.getByRole('link', { name: 'Dropdown' }).click();

  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption({ label: 'Option 1' });

  await page.goBack();

  await page.waitForTimeout(10000);

  const availableExamples = page.getByRole('heading', { name: 'Available Examples' });
  const headingText = await availableExamples.textContent();
  expect(headingText).toContain('Available Examples');
  //await percyScreenshot(page, "Screenshot 2", {fullPage: true});
});
