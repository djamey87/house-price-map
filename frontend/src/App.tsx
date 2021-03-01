import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./logo.svg";
import Chart from "./components/Chart";

const App: React.FC = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({} as App.apiData);
  const [isLoading, setIsLoading] = useState(false);

  const getPointData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      setError("");
      const response = await axios.get<App.apiData>("http://localhost:9000/points");
      setData(response.data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPointData();
  }, []);

  console.log("App", data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-error">{error}</div>

      <Chart width={200} height={200} data={data.points} />
    </div>
  );
};

export default App;
