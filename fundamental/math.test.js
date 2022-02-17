import { sumAsync, subtractAsync } from "./math.js";
import { expect } from "../lib/assertion-library.js";
import { test } from "../lib/testing-framework.js";

test("Asynchronous Sum Test", async () => {
  const res = await sumAsync(4, 6);
  expect(res).tobe(10);
});

test("Asynchronous Subtract Test", async () => {
  const res = await subtractAsync(10, 5);
  expect(res).tobe(5);
});
