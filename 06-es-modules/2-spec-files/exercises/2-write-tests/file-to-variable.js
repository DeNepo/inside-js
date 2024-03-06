/**
 * Converts a kebab-case file name from to camel-case variable name.
 *
 * @param {string} fileName - A kebab-case file name.
 * @returns {string} The file name converted to a camel case variable name.
 *
 * @example
 * fileToVariable('file-to-variable.js');
 * // -> 'fileToVariable'
 *
 * @example
 * fileToVariable('do-magic.js');
 * // -> 'doMagic'
 */
export const fileToVariable = (fileName = '') => {
  const noExtension = fileName.replace('.js', '');
  const camelCase = noExtension.replace(/-./g, (subString) =>
    subString[1].toUpperCase(),
  );
  return camelCase;
};
