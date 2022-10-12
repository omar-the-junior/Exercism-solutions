//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (array, callBack) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    result.push(callBack(number));
  }
  return result;
};
