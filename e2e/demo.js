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
  'Check length of table': (browser) => {
    browser
      .url(url + 'leaderboard')
      .waitForElementVisible('body', 1000)
      .elements('tag name', 'tr', (result) => {
        browser.assert.equal(result.value.length > 5, true)
      })
      .end();
  }
};