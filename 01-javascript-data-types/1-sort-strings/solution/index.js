/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} [arr=[]] arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr = [], param = 'asc') {
  const directions = {
    asc: 1,
    desc: -1
  };

  const direction = directions[param]; // undefined

  if (direction === undefined) {
    throw new Error('Unknown direction');
  }

  return [...arr].sort((string1, string2) => {
    return direction * string1.localeCompare(string2,
      ['ru', 'en'],
      {caseFirst: 'upper'});
  });
}

const compare = (a, b) => {
  return a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
}
