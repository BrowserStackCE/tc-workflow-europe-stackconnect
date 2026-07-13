const { expect, test } = require('@playwright/test');

test('User can log in with valid credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://finstack-alpha.vercel.app/login');

  // Enable the Self Heal / Percy toggle
  //await page.getByRole('button', { name: 'Enable' }).click();

  // Enter valid credentials
  await page.locator('#email').fill('test.automation@medistack.com');
  await page.locator('#password').fill('testingisfun99');

  // Submit the login form (id is stable; label switches to "Login" once Self Heal is enabled)
  await page.locator('#sign_in').click();

  // Verify successful login: redirected to the dashboard (login is slow to process, esp. on Edge)
  await page.waitForURL(/\/dashboard/, { timeout: 60000 });
  await expect(page).toHaveURL(/\/dashboard/);
});