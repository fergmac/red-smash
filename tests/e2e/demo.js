const viewport_widths = [240, 320, 360, 568, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920];
const imageDir = name => __dirname + '/screenshots/sizes/' + name + '.png';

const url = 'http://localhost:3000/';
module.exports = {
  'Loads page with title': (browser) => {
    browser
      .url(url + 'challenges')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Challenges')
      .end();
  },
  'Loads page with face': (browser) => {
    browser
      .url(url + 'leaderboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Leader Board')
      .end();
  },
  'Loads page with title': (browser) => {
    let main = browser.page.main();
    main
      .navigate()
      .waitForElementVisible('body', 1000)
      .assert.containsText('@title', 'Leader Board');
    browser.end();
  },
  'Check length of table': (browser) => {
    browser
      .url(url + 'leaderboard')
      .waitForElementVisible('body', 1000)
      .elements('tag name', 'tr', (result) => {
        browser.assert.equal(result.value.length > 3, true)
      })
      .end();
  },
  'Take photos': (browser) => {
    browser
      .url(url + 'leaderboard')
      .waitForElementVisible('body', 1000);
    viewport_widths.forEach(width => {
      browser
        .resizeWindow(width, 300)
        .saveScreenshot(imageDir(`page-${width}`));
    });
    browser.end();
  }
};