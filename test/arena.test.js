const chai = require('chai');
const expect = chai.expect;
const { createPlayer } = require('../player');
const { fight } = require('../arena');

describe('Arena', function() {
    it('should simulate a fight', function() {
        const playerA = createPlayer(50, 5, 10);
        const playerB = createPlayer(100, 10, 5);
        fight(playerA, playerB);
        expect(playerA.health > 0 || playerB.health > 0).to.be.true;
    });
});
