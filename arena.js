const { isAlive, defend, attack, defendRoll } = require('./player');

const fight = (player1, player2) => {
    while (isAlive(player1) && isAlive(player2)) {
        if (player1.health < player2.health) {
            attackRound(player1, player2);
        } else {
            attackRound(player2, player1);
        }
    }

    if (isAlive(player1)) {
        console.log("Player 1 wins!");
    } else {
        console.log("Player 2 wins!");
    }
};

const attackRound = (attacker, defender) => {
    const attackDamage = attack(attacker);
    const defendDamage = defendRoll(defender);
    const actualDamage = attackDamage - defendDamage;

    if (actualDamage > 0) {
        defend(defender, actualDamage);
    }

    console.log(`Attacker dealt ${attackDamage} damage. Defender blocked ${defendDamage} damage.`);
    console.log(`Defender's remaining health: ${defender.health}`);
};

module.exports = { fight };
