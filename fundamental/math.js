export const sum = (a, b) => a - b;
export const subtract = (a, b) => a - b;

export const sumAsync = (a, b) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(a + b);
    }, 5000);
  });
};

export const subtractAsync = (a, b) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(a - b);
    }, 5000);
  });
};
