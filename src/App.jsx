import { useEffect, useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph.jsx";
import DataTable from "./components/DataTable.jsx";
import LineGraph from "./components/LineGraph.jsx";
import PieGraph from "./components/PieGraph.jsx";
import { getAllData } from "./utils/apiHelper";
import useWebSocket from "./utils/socketHelper";
import { useDispatch, useSelector } from "react-redux";
import { setAllData, setConnectionStatus } from "./store/dashboardSlice.js";

function App() {
  const { data, connectionStatus } = useWebSocket();
  const dispatch = useDispatch();
  console.log("werwe, ", data);

  useEffect(() => {
    // getAllData().then((data) => {
    dispatch(setAllData(data));
    dispatch(setConnectionStatus(connectionStatus));
    // });
  }, [data, connectionStatus]);

  // console.log("dndsafdata , ", storedata);

  return (
    <div className="h-fit w-screen">
      <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Realtime Dashboard
        </span>
      </h1>
      {/* 1st row */}
      <section className="flex items-center justify-between mt-16">
        <BarGraph />
        <PieGraph />
        <LineGraph />
      </section>
      <section className="flex justify-center mt-16">
        <DataTable />
      </section>
    </div>
  );
}

export default App;
