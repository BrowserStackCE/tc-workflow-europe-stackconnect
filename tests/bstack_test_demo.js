const { expect, test } = require('@playwright/test');
//const {test} = require('../fixture.js')
const { percyScreenshot } = require("@percy/playwright");
const AxeBuilder = require('@axe-core/playwright').default;

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

// TC-351: Complete Appointment Confirmation Workflow
// Verifies the end-to-end appointment confirmation workflow: a logged-in user selects a doctor,
// chooses a date/time, fills in patient details, and receives a booking confirmation.
// Includes accessibility scans (axe-core) at each major step of the booking flow.
test('TC-351: Complete Appointment Confirmation Workflow', async ({ page }) => {
  const baseUrl = 'https://medistack.vercel.app/';
  const a11yViolations = [];

  // Helper to run accessibility scan and collect violations (non-blocking)
  const runA11yScan = async (label) => {
    const results = await new AxeBuilder({ page }).analyze();
    if (results.violations.length > 0) {
      a11yViolations.push({ step: label, violations: results.violations });
      console.log(`[A11Y] ${label}: ${results.violations.length} violation(s) found`);
      results.violations.forEach(v => {
        console.log(`  - [${v.impact}] ${v.id}: ${v.description}`);
      });
    } else {
      console.log(`[A11Y] ${label}: No violations found ✅`);
    }
  };

  // Navigate to MediStack
  await page.goto(baseUrl);

  // Accessibility scan: Homepage
  await runA11yScan('Homepage');

  // Step 1: Login - click Login button
  await page.locator('#login').click();

  // Accessibility scan: Login modal
  await runA11yScan('Login Modal');

  // Fill in login credentials
  await page.locator('#contact').fill('test.automation@medistack.com');
  await page.locator('#password').fill('testingisfun99');

  // Click Sign In button (exact match to avoid matching 'Sign in with OTP')
  await page.getByRole('button', { name: 'Sign In', exact: true }).first().click();

  // Wait for login to complete - Logout button appears in nav
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible({ timeout: 15000 });

  // Navigate to Dr. Sarah Johnson's booking page via the Book button
  const drSarahCard = page.getByRole('heading', { name: 'Dr. Sarah Johnson' }).first();
  await expect(drSarahCard).toBeVisible();

  // Click the Book button for Dr. Sarah Johnson (first Book button in featured doctors)
  const bookButtons = page.getByRole('button', { name: 'Book' });
  await bookButtons.first().click();

  // Verify we're on the Book Appointment page
  await expect(page.getByRole('heading', { name: 'Book Your Appointment' })).toBeVisible();

  // Accessibility scan: Step 1 - Select Date & Time
  await runA11yScan('Step 1 - Select Date & Time');

  // Select 'In-Person Consultation'
  await page.locator('#in-person').click();

  // Click on 'Today' date card
  await page.getByRole('heading', { name: 'Today' }).click();

  // Select '2:30 PM' time slot
  await page.getByRole('button', { name: '2:30 PM' }).click();

  // Verify selection summary shows correct date/time
  await expect(page.getByText('Selected: Today at 2:30 PM')).toBeVisible();

  // Click 'Continue to Patient Details'
  await page.getByRole('button', { name: 'Continue to Patient Details' }).click();

  // --- Step 2: Patient Details ---
  // Verify Step 2 is displayed
  await expect(page.getByRole('heading', { name: 'Patient Information' })).toBeVisible();

  // Accessibility scan: Step 2 - Patient Details
  await runA11yScan('Step 2 - Patient Details');

  // Fill in patient details
  await page.locator('#name').fill('John Smith');
  await page.locator('#email').fill('john.smith@example.com');
  await page.locator('#phone').fill('5551234567');
  await page.locator('#age').fill('35');

  // Select gender
  await page.locator('#male').click();

  // Fill reason for consultation
  await page.locator('#reason').fill('Chest pain and shortness of breath');

  // Click 'Continue to Confirmation'
  await page.getByRole('button', { name: 'Continue to Confirmation' }).click();

  // --- Step 3: Confirmation Page ---
  // Verify confirmation page is displayed
  await expect(page.getByRole('heading', { name: 'Confirm Your Appointment' })).toBeVisible();

  // Accessibility scan: Step 3 - Confirmation
  await runA11yScan('Step 3 - Confirmation');

  // Verify appointment summary details
  await expect(page.getByText('Dr. Sarah Johnson').first()).toBeVisible();
  await expect(page.getByText('Cardiologist').first()).toBeVisible();
  await expect(page.getByText('In-Person Consultation')).toBeVisible();
  await expect(page.getByText('Today').first()).toBeVisible();
  await expect(page.getByText('2:30 PM').first()).toBeVisible();
  await expect(page.getByText('$').first()).toBeVisible();
  await expect(page.getByText('150').first()).toBeVisible();

  // --- Step 4: Confirm Appointment ---
  await page.getByRole('button', { name: 'Confirm Appointment' }).click();

  // --- Step 5: Verify Success ---
  // Verify success confirmation message
  await expect(page.getByRole('heading', { name: 'Appointment Confirmed!' })).toBeVisible({ timeout: 15000 });

  // Accessibility scan: Success Page
  await runA11yScan('Success - Appointment Confirmed');

  // Verify booking reference number is displayed (format: #APTxxx)
  await expect(page.getByText('Appointment ID:')).toBeVisible();

  // Verify appointment summary on success page
  await expect(page.getByText('Dr. Sarah Johnson').first()).toBeVisible();
  await expect(page.getByText('Today').first()).toBeVisible();
  await expect(page.getByText('2:30 PM').first()).toBeVisible();

  // Report accessibility summary
  if (a11yViolations.length > 0) {
    const totalViolations = a11yViolations.reduce((sum, s) => sum + s.violations.length, 0);
    console.log(`\n[A11Y SUMMARY] ${totalViolations} total violation(s) across ${a11yViolations.length} step(s)`);
    // Non-blocking: log violations but don't fail the functional test
  } else {
    console.log('\n[A11Y SUMMARY] No accessibility violations found across all steps ✅');
  }
});