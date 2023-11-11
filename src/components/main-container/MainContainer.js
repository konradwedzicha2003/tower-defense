import React from "react";
import './main-container.scss'
import ActionBar from "../action-bar/ActionBar";
import Grid from "../grid/Grid";

const MainContainer = () => {

    return (
      <div className="main-container">
            <Grid/>
            <ActionBar/>
      </div>
    )
  }
  
  export default MainContainer;
  