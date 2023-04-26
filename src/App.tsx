import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Layout } from "./model";

const SERVER_URL = "http://localhost:8080/definition";

function App() {
  const [appData, setData] = useState<Layout|null>(null);
  console.log(appData);

  async function fetchData() {
    const response = await axios.get(SERVER_URL);
    console.log(response);
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      {/* TODO remove title usage from template */}
      <h1>{"Place you components here 👇"}</h1>
      <div className="content">
        <h3>{appData?.title}</h3>
        <h4>jljkjnnk</h4>
      </div>
    </div>
  );
}

export default App;
