import { useState } from "react";
import "./App.css";
import UserContectProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContectProvider>
      <h1> React with Chai</h1>
      <Login />
      <Profile />
    </UserContectProvider>
  );
}

export default App;
