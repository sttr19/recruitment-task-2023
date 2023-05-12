import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import LayoutBlock from "./components/LayoutBlock";

const SERVER_URL = "http://localhost:8080/definition";

/*const ElementsService = {
  get: async function () {
    return axios.get(SERVER_URL);
  },
};*/

export default function App() {
  const [appData, setData] = useState(null);
  console.log(appData);

  /*useEffect(() => {
    ElementsService.get().then((response) => {
      setData(response.data);
    });
  }, []);*/

  async function fetchData() {
    const response = await axios.get(SERVER_URL);
    console.log(response);
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  /*function getValue(rootObj: any) {
    let arr = Object.entries(rootObj);
    return arr;
  }

  console.log(getValue(appData));*/

  return (
    <div className="main">
      <h1>Place you components here </h1>
      {appData && <h3>{appData.title}</h3>}

      {appData && 
        <div className="content">
          <LayoutBlock {...appData.rootElement} />
        </div>
  }
    </div>
  );
}
