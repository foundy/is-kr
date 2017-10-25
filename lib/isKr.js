'use strict';

module.exports = isKr;

/**
 * isKr
 *
 * @param {string} str string to check
 * @return {boolean} 한글 여부 반환
 */
function isKr(str) {
  var patt = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  return patt.test(str);
}