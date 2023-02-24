/**
 * This file comes by default. If it does not, create by this exact name.
 */
const { devices } = require("@playwright/test");

const config = {
  testDir: "./Tests",
  timeout: 30 * 1000 /* Maximum time one test can run for. */,
  expect: {
    timeout: 5000,
  },

  //reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: [
    // {
    //   name: "Safari execution",
    //   use: {
    //     browserName: "webkit",
    //     headless: false,
    //     screenshot: "on",
    //     trace: "on", //off,on
    //     //viewport : {width:720, height:720} //this is useful when you wanna resize the window and see if it is still responsive. For example, testing for mobile device, the widow size needs to be smaller.
    //   },
    // },
    // {
    //   name: "Chrome execution",
    //   use: {
    //     browserName: "chromium",
    //     headless: false,
    //     screenshot: "on",
    //     trace: "on", //off,on
    //   },
    // },
    {
      name: "Firefox execution",
      use: {
        browserName: "firefox",
        headless: false,
        screenshot: "on",
        //permissions: ["geolocation"], // to automatically allow google to track the locations
        //ignoreHttpsErrors: true, //to automatically handle SSL certification errors.
        trace: "on", //off,on
        //viewport: { width: 500, height: 500 }, //to see the window in a custom size
        //...devices["iPhone 11"], //to see the window in iphone 11 size. Same functionality as viewport.
      },
    },
  ],
};

module.exports = config;