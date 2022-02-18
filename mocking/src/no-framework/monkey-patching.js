const assert = require("assert");
const utils = require("../../utils.js");
const thumbWar = require("../../thumb-war.js");

const originalWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Abid", "Liza");
assert.strictEqual(winner, "Abid");

utils.getWinner = originalWinner;
