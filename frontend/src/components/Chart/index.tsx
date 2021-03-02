import React from "react";
import { getColourByThreshold, getValueThreshold } from "../../utils/value.util";
import Grid from "./Grid";

interface Props {
  data: App.Point[];
  height: number;
  width: number;
  circleRadius: number;
  minValue: number;
  maxValue: number;
}

const Chart: React.FC<Props> = ({ circleRadius, data, height, width, maxValue }) => {
  const translateCoOrds = (width: number, height: number, x: number, y: number) => {
    return { x: (x / 100) * width, y: (y / 100) * height };
  };

  const getColorValue = (price: number): string => {
    return getColourByThreshold(getValueThreshold(maxValue, price));
  };

  if (!data || data?.length === 0) {
    return null;
  }
  return (
    <Grid height={height} width={width}>
      {data.map((datum, index) => {
        const { x, y } = translateCoOrds(width, height, datum.x, datum.y);
        return <circle key={`point-${index}`} fill={getColorValue(datum.p)} cx={x} cy={y} r={circleRadius} />;
      })}
    </Grid>
  );
};

export default Chart;
