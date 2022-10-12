// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return arrayToNum(array1) + arrayToNum(array2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */

export function luckyNumber(value) {
  let stringValue = String(value)
  let reversedStringValue = ''

  for (let i = stringValue.length - 1; i >= 0; i--) {
    const number = stringValue[i];
    reversedStringValue += number;
  }

  return stringValue === reversedStringValue
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Number(input) > 0) return ''

  if (!input) return 'Required field'

  return 'Must be a number besides 0'
}

function arrayToNum(array) {
  let fullNumber = ''
  for (let i = 0; i < array.length; i++) {
    const number = String(array[i]);
    fullNumber += number
  }
  return Number(fullNumber)
}