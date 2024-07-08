const chai = require('chai');
const expect = chai.expect;
const { createPlayer, isAlive, defend, attack } = require('../player');

describe('Player', function() {
    it('should correctly attack', function() {
        const player = createPlayer(50, 5, 10);
        const damage = attack(player);
        expect(damage).to.be.at.least(10);
        expect(damage).to.be.at.most(60);
    });

    it('should correctly defend', function() {
        const player = createPlayer(50, 5, 10);
        defend(player, 20);
        expect(player.health).to.equal(30);
    });

    it('should correctly check if alive', function() {
        const player = createPlayer(0, 5, 10);
        expect(isAlive(player)).to.be.false;
    });
});
