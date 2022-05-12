import React from "react";
import "./App.scss";
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';


function App() {
  Exporting(Highcharts);
  const userName = "John Doe";
  const screenName = "Sales Report";


  return (
    <div className="App">
      <header className="AppHeader">
        <div className="Container">
          <h2 className="User">
            <div className="Circle"></div>
            {userName}
            </h2>
          <h1 className="Title">{screenName}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
