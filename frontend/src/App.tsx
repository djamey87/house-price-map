import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

const App: React.FC = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([] as App.Point[]);
  const [isLoading, setIsLoading] = useState(false);

  const getTestData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      setError("");
      const response = await axios.get<App.Point[]>("http://localhost:9000/points");
      setData(response.data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTestData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-error">{error}</div>
    </div>
  );
};

export default App;
