const comprehension = require('../src/index');

const { expect } = require('chai');

describe('Basic Python Like Comprehension Tests', () => {
    it('should should return the whole array', () => {
        expect(comprehension.parse("{ x | x <- [1,2,3,4,5,6,7] | x }")).is.to.eql([1, 2, 3, 4, 5, 6, 7])
    });
    it('should should return the double each element', () => {
        expect(comprehension.parse("{ x*x | x <- [1,2,3,4,5,7] | x }")).is.to.eql([ 1, 4, 9, 16, 25, 49 ])
    });
    it('should should return greater then 1 but also skip out 3', () => {
        expect(comprehension.parse("{ x | x <- [1,2,3,4,5,6,7] | x > 1 && x !=3 }")).is.to.eql([ 2, 4, 5, 6, 7 ] )
    });
});