"use strict"

const assert = require('chai').assert;

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            const [x, y] = [1, 2]
            const {a, b} = { a: 10, b: 20 }

            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});