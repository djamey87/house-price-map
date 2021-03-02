import React from "react";
import { ValueThreshold } from "../../models/enums";
import { getColourByThreshold } from "../../utils/value.util";
import "./index.css";

interface Props {}

const renderKeyItem = (threshold: ValueThreshold) => {
  return (
    <div className="key-wrapper">
      <div className="key-circle" style={{ backgroundColor: getColourByThreshold(threshold) }}></div>
      <div>
        <p>{threshold.toString()}%</p>
      </div>
    </div>
  );
};

const ColourKey: React.FC<Props> = () => {
  return (
    <div className="colour-key">
      {renderKeyItem(ValueThreshold.One)}
      {renderKeyItem(ValueThreshold.Two)}
      {renderKeyItem(ValueThreshold.Three)}
      {renderKeyItem(ValueThreshold.Four)}
      {renderKeyItem(ValueThreshold.Five)}
    </div>
  );
};

export default ColourKey;
