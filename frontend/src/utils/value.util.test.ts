import { ValueThreshold } from "../models/enums";
import { getColourByThreshold, getValueThreshold } from "./value.util";

describe("value utils", () => {
  describe("getColourByThreshold", () => {
    test('Should return "#fff33b" for a threshold of One', () => {
      expect(getColourByThreshold(ValueThreshold.One)).toStrictEqual("#fff33b");
    });
    test('Should return "#fdc70c" for a threshold of Two', () => {
      expect(getColourByThreshold(ValueThreshold.Two)).toStrictEqual("#fdc70c");
    });
    test('Should return "#f3903f" for a threshold of Three', () => {
      expect(getColourByThreshold(ValueThreshold.Three)).toStrictEqual("#f3903f");
    });
    test('Should return "#ed683c" for a threshold of Four', () => {
      expect(getColourByThreshold(ValueThreshold.Four)).toStrictEqual("#ed683c");
    });
    test('Should return "#e93e3a" for a threshold of Five', () => {
      expect(getColourByThreshold(ValueThreshold.Five)).toStrictEqual("#e93e3a");
    });
  });
  describe("getValueThreshold", () => {
    const maxValue = 100;
    test("Should return One for a value of 2", () => {
      expect(getValueThreshold(maxValue, 2)).toStrictEqual(ValueThreshold.One);
    });
    test("Should return Two for a value of 5", () => {
      expect(getValueThreshold(maxValue, 5)).toStrictEqual(ValueThreshold.Two);
    });
    test("Should return Three for a value of 25", () => {
      expect(getValueThreshold(maxValue, 25)).toStrictEqual(ValueThreshold.Three);
    });
    test("Should return Four for a value of 75", () => {
      expect(getValueThreshold(maxValue, 75)).toStrictEqual(ValueThreshold.Four);
    });
    test("Should return Five for a value of 95", () => {
      expect(getValueThreshold(maxValue, 95)).toStrictEqual(ValueThreshold.Five);
    });
  });
});
