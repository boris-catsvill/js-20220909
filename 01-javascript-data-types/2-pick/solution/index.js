/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) { // [keys, values]
    if (fields.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};

const pick2 = (obj, ...fields) => {
  const result = {};

  for (const field of fields) {
    if (Object.hasOwn(obj, field)) {
    // if (obj.hasOwnProperty(field)) {
      result[field] = obj[field];
    }
  }

  return result;
}
