const selectors = require('../test_data/selectors')
const functions = require('../test_data/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'do odds and evens sort correctly?': browser => {
        functions.enterValue(selectors.fields.evnOdd, '2,48,300,95', browser)
        browser.click(selectors.buttons.split)
            .expect.element(selectors.results.evens).text.to.equal('Evens: [2,48,300]')
        browser.expect.element(selectors.results.odds).text.to.equal('Odds: [95]')
    },
    'does the object filter thingy work?': browser => {
        functions.enterValue(selectors.fields.filterObject, 'title', browser)
        browser.click(selectors.buttons.filterObject)
            .expect.element(selectors.results.object).text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
    },
    'does the string filter thingy work, too?': browser => {
        functions.enterValue(selectors.fields.filterString, 's', browser)
        browser.click(selectors.buttons.filterString)
            .expect.element(selectors.results.string).text.to.equal('Filtered Names: [ "James", "Jessica" ]')
    },
    'does the palindrome thingy work?': browser => {
        functions.enterValue(selectors.fields.palindrome, 'emordnilap palindrome', browser)
        browser.click(selectors.buttons.check)
            .expect.element(selectors.results.palindrome).text.to.equal('Palindrome: true')
    },
    'does the Sum thingy work?': browser => {
        functions.enterValue(selectors.fields.sum1, '2', browser)
        functions.enterValue(selectors.fields.sum2, '3', browser)
        browser.click(selectors.buttons.add)
            .expect.element(selectors.results.sum).text.to.equal('Sum: 5')
    }
}