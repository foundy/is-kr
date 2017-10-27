'use strict';

exports = module.exports = isKr;
exports.delKr = delKr;

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

function delKr(str) {
  // var patt = /^[A-Za-z][A-Za-z0-9]*$/;
  var patt = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  return str.replace(patt, '')
}