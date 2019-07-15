'use strict';

const probabilityOfLinearCorrelation = Positions => {

  const sum = {
    XY: 0, X: 0, Y: 0, powX: 0, powY: 0
  };

  Positions.forEach(position => {
    sum.XY += position.x * position.y;
    [sum.X, sum.Y] = [sum.X += position.x, sum.Y += position.y];
    [sum.powX, sum.powY] = [sum.powX += Math.pow(position.x, 2), sum.powY += Math.pow(position.y, 2)];
  });

  const positionsCount = Positions.length;
  const numerator = (positionsCount * sum.XY) - (sum.X * sum.Y);

  const denominatorX = Math.sqrt((positionsCount * sum.powX) - Math.pow(sum.X, 2));
  const denominatorY = Math.sqrt((positionsCount * sum.powY) - Math.pow(sum.Y, 2));
  const denominator = denominatorX * denominatorY;

  return Math.abs(Math.pow(numerator / denominator, 2));

};


module.exports = probabilityOfLinearCorrelation;