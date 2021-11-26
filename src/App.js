import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import About from './component/Home.js';
import ControlledOpenSpeedDial from './component/SpeedDial.js';
import LabTabs from './component/Tab'
import MiniDrawer from './pages/drawer';
import Research from './pages/Research';
import D_Tabs from './component/Degree_Tabs';
import Minor from './pages/Minor';
import Footer from './pages/footer'
import Maps from './pages/Map';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {


  return (
    <div>
      <Router>
        <ControlledOpenSpeedDial />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Deg" component={D_Tabs} />
          <Route exact path="/M_Deg" component={Minor} />
          <Route exact path="/People" component={LabTabs} />
          <Route exact path="/Research" component={Research} />
          <Route exact path="/Work" component={About} />
          <Route exact path="/Map" component={Maps} />
        </Switch>

        <Footer />
        <MiniDrawer />

      </Router>
    </div>

  );
}

export default App;