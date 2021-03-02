import { ValueThreshold } from "../models/enums";

const colours = {
  one: "#fff33b",
  two: "#fdc70c",
  three: "#f3903f",
  four: "#ed683c",
  five: "#e93e3a",
};

const getColourByThreshold = (threshold: ValueThreshold): string => {
  switch (threshold) {
    case ValueThreshold.One:
      return colours.one;
    case ValueThreshold.Two:
      return colours.two;
    case ValueThreshold.Three:
      return colours.three;
    case ValueThreshold.Four:
      return colours.four;
    case ValueThreshold.Five:
    default:
      return colours.five;
  }
};

const getValueThreshold = (max: number, value: number): ValueThreshold => {
  const percentage = (value / max) * 100;

  if (percentage >= 95) {
    return ValueThreshold.Five;
  } else if (percentage >= 75 && percentage < 95) {
    return ValueThreshold.Four;
  } else if (percentage >= 25 && percentage < 75) {
    return ValueThreshold.Three;
  } else if (percentage >= 5 && percentage < 25) {
    return ValueThreshold.Two;
  }

  return ValueThreshold.One;
};

export { getColourByThreshold, getValueThreshold };
