/**
 *
 * @param {boolean} likesCats
 * @param {boolean} isAllergic
 * @param {boolean} ownsOne
 * @returns {boolean}
 */
export const catAdvisor = (likesCats, isAllergic, ownsOne) => {
  debugger
  return likesCats && isAllergic && ownsOne
    ? 'replace your cat with a stuffed animal'
    : likesCats && isAllergic && !ownsOne
    ? 'make a friend who has a cat'
    : likesCats && !isAllergic && ownsOne
    ? 'you are doing great'
    : likesCats && !isAllergic && !ownsOne
    ? 'get a cat'
    : !likesCats && isAllergic && ownsOne
    ? 'rethink your life choices'
    : !likesCats && isAllergic && !ownsOne
    ? 'you are doing great'
    : !likesCats && !isAllergic && ownsOne
    ? 'you could be doing worse'
    : // !likesCats && !isAllergic && !ownsOne
      'you are doing great';
};
