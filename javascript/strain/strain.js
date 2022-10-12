//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (array, callback) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const output = array[i];
    if (callback(output)) {
      result.push(output);
    }
  }
  return result;
};

export const discard = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const output = array[i];
    if (!callback(output)) {
      result.push(output);
    }
  }
  return result;

};
