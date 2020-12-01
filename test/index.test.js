const { assert } = require('chai');
const { greeting, sum } = require('../index');

describe('Main', () => {
    describe('greeting',  () => {
        it('should return Hello World', () => {
            const result = greeting();
            assert.equal(result, 'Hello World');
        });
    
        it('should return Hello Dmitry', () => {
            const result = greeting('Dmitry');
            assert.equal(result, 'Hello Dmitry');
        });
    
        it('should return string', () => {
            const result = greeting();
            assert.typeOf(result, 'string');
        });
    });
    describe('sum',  () => {
        it('should return correct sum', () => {
            const result = sum(1, 2, 30);
            assert.equal(result, 33);
        });
    
        it('should return number', () => {
            const result = sum();
            assert.typeOf(result, 'number');
        });
    });
});
