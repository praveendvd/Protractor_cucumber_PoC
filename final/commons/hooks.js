var { After, Before } = require('cucumber');

// Asynchronous Promise
After(async function(scenario) {
    if (scenario.result.status === 'failed') {
            const screenShot = await browser.takeScreenshot();
            this.attach(screenShot, "image/png");
    }
});

