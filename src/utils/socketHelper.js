import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000";

const useWebSocket = () => {
  const [data, setData] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState("connected");

  useEffect(() => {
    const socket = io(SOCKET_URL);

    // Listen for updates
    socket.on("update", (newData) => {
      console.log("update sockert - ", newData);
      setData(newData);
    });

    // Handle connection errors
    socket.on("connect_error", () => setConnectionStatus("disconnected"));
    socket.on("reconnect", () => setConnectionStatus("connected"));
    socket.on("disconnect", () => setConnectionStatus("disconnected"));

    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  console.log("socketss. ", { data, connectionStatus });
  return { data, connectionStatus };
};

export default useWebSocket;
