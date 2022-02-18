const utils = require("../../utils.js");
const thumbWar = require("../../thumb-war.js");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner();
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Abid", "Liza");
  expect(winner).tobe("Abid");

  // cleanup
  utils.getWinner = originalGetWinner;
});
