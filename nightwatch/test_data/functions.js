module.exports = {
    enterValue: (selectors, input, browser) => {
        browser
            .clearValue(selectors)
            .setValue(selectors, input)
            .verify.value(selectors, input)
    }
}