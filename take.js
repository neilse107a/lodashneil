/** take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */

function take(array, n=1) {
  if (!(array != null && array.length)) {
    return []
  }
  return array.slice(0, n < 0 ? 0 : n)
}

module.exports = take
