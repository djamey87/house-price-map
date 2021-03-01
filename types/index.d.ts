declare module App {
  interface apiData {
    minValue: number;
    maxValue: number;
    points: Point[];
  }
  interface Point {
    x: number;
    y: number;
    p: number;
  }
}
