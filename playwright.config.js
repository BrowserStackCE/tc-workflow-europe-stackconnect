// This is a sample config for what users might be running locally
const config = {
  testDir: './tests',
  testMatch: '**/bstack_test_demo*.js',

  /* Maximum time one test can run for. */
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* tests in parallel */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'line',
  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chrome',
  //     use: {
  //       browserName: 'chromium',
  //       channel: 'chrome',
  //     },
  //   },
  // ],
  // projects: devices.map(device => ({
  //   name: device.deviceName,
  //   use: { ...device }, // Pass device info into the worker "use" object
  // })),
};

module.exports = config;
