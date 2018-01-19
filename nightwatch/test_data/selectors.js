module.exports = {
    fields: {
        evnOdd: 'input[name="evenOddInput"]',
        filterObject: 'input[name="objectFilterInput"]',
        filterString: 'input[id="nameFilterInput"]',
        palindrome: 'input[name="palindromeInput"]',
        sum1: 'input[name="sumInput1"]',
        sum2: 'input[name="sumInput2"]'
    },
    buttons: {
        split: 'button[name="evenOddButton"]',
        filterObject: 'button[name="objectFilterButton"]',
        filterString: 'button[id="nameFilterButton"]',
        check: 'button[name="palindromeButton"]',
        add: 'button[name="sumButton"]'
    },
    results: {
        evens: 'span[name="evenResults"]',
        odds: 'span[name="oddResults"]',
        object: 'span[name="objectFilterResults"]',
        string: 'span[name="nameFilterResults"]',
        palindrome: 'span[name="palindromeResults"]',
        sum: 'span[name="sumResults"]'
    }
}