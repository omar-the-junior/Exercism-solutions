// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

//'Pure Strawberry Joy'
// 0.5
// 'Energizer'
// 'Green Garden'
//  1.5 
// 'Tropical Island'
// 3
// 'All or Nothing'
// 5
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
      return 1.5
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;
  while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
    if (limes[limesCut] === 'small') {
      wedgesCut += 6
    } else if (limes[limesCut] === 'medium') {
      wedgesCut += 8
    } else {
      wedgesCut += 10
    }
    limesCut++
  }

  return limesCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  let ordersLeft = [...orders];
  while (timeLeft > 0) {
    ordersLeft.shift()
    timeLeft -= timeToMixJuice(orders[i])
    i++
  }

  return ordersLeft
}
