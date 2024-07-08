const Dice = require('./dice');

const createPlayer = (health, strength, attack) => ({
    health,
    strength,
    attack
});

const isAlive = (player) => player.health > 0;

const defend = (player, damage) => {
    player.health -= damage;
    if (player.health < 0) {
        player.health = 0;
    }
};

const attack = (player) => {
    const diceRoll = Dice.roll();
    return player.attack * diceRoll;
};

const defendRoll = (player) => {
    const diceRoll = Dice.roll();
    return player.strength * diceRoll;
};

module.exports = { createPlayer, isAlive, defend, attack, defendRoll };
