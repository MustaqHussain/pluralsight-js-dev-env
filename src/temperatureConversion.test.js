var expect  = require('chai').expect;
var convert = require('./temperatureConversion.js');


describe('Our first test', ()=> {
    it('should pass', ()=> {
        expect(true).to.equal(true);
    });
});

describe('Temperature Conversion', function() {
    describe('cToF', function() {
      it('should convert -40 celsius to -40 fahrenheit', function() {
        expect(-40, convert.cToF(-40));
      });
      it('should convert 0 celsius to 32 fahrenheit', function() {
        expect(32, convert.cToF(0));
      });
      it('should return undefined if no temperature is input', function() {
        expect(undefined, convert.cToF(''));
      });
    });
});
