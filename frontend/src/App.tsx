import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./logo.svg";
import Chart from "./components/Chart";
import ColourKey from "./components/ColourKey";

const App: React.FC = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({} as App.apiData);

  const getPointData = async (): Promise<void> => {
    try {
      setError("");
      const response = await axios.get<App.apiData>("http://localhost:9000/points");
      setData(response.data);
    } catch (error) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    getPointData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1 className="App-title">House Price Map</h1>
        </div>

        <h3>Minimum: £{data.minValue}</h3>
        <h3>Maximum: £{data.maxValue}</h3>
        <ColourKey />
      </header>
      <div className="App-error">{error}</div>

      <Chart circleRadius={3} width={500} height={500} data={data.points} minValue={data.minValue} maxValue={data.maxValue} />
    </div>
  );
};

export default App;
