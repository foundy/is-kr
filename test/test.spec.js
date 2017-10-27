const expect = require('chai').expect;
const isKr = require('../lib/isKr');

describe('is-kr', () => {

  it('without Korean alphabet', () => {
    const result = isKr('show me the money');

    expect(result).to.equal(false);
  });

  it('include at least one Korean alphabet', () => {
    const result = isKr('show me the 돈');

    expect(result).to.equal(true);
  });

});