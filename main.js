const { createPlayer } = require('./player');
const { fight } = require('./arena');

const playerA = createPlayer(50, 5, 10);
const playerB = createPlayer(100, 10, 5);

fight(playerA, playerB);
