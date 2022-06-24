import React from "react";

import Header from "./components/header/Header";
import MenuTask from "./components/menu/MenuTask";
import Main from "./routers/index";

import "./appVariable.scss";

function App() {
  return (
    <div className="ml-[150px]">
      <Header></Header>
      <MenuTask></MenuTask>
      <Main></Main>
    </div>
  );
}

export default App;
