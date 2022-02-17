export function expect(actual) {
  return {
    tobe(expected) {
      if (actual !== expected)
        throw new Error(`${actual} is not equal to ${expected}`);
    },
  };
}
