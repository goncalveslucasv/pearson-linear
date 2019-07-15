
'use strict';

const probabilityOfLinearCorrelation = require('../app');

test('linear correlation on X axis which returns NaN. the division of two numbers tending to 0 results NaN', () => {
  const points = [
    { x: 0, y: 0 },
    { x: 1000, y: 0 },
    { x: 2000, y: 0 }
  ];

  const probability = probabilityOfLinearCorrelation(points);
  expect(probability).toBeNaN();
});

test('linear correlation on diagonal line', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 500, y: 500 },
    { x: 3000, y: 3000 }
  ];

  const probability = probabilityOfLinearCorrelation(points);
  expect(probability).toBeGreaterThanOrEqual(1);
});


test('linear correlation on distributed points', () => {
  const points = [
    { x: 1, y: 2 },
    { x: 1, y: 8 },
    { x: 3, y: 6 },
    { x: 5, y: 4 }
  ];

  const probability = probabilityOfLinearCorrelation(points);
  expect(probability).toBe(0.018181818181818184);
});
