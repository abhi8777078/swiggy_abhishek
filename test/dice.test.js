const chai = require('chai');
const expect = chai.expect;
const Dice = require('../dice');

describe('Dice', function() {
    it('should correctly roll', function() {
        const roll = Dice.roll();
        expect(roll).to.be.at.least(1);
        expect(roll).to.be.at.most(6);
    });
});
