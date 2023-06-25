import React, { useState, useEffect } from "react"
import logo from './assets/logo.jpg';
import './App.css';
import Homepage from './Homepage';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import OurWork from "./OurWork";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'

function App() {
  const [tab, setTab] = useState("homepage")

  const handleChange = (event, value) => {
    console.log(value)
    setTab(value)
  }

  useEffect(() => {
  }, [tab])

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-10" style={{paddingTop:"15px", paddingLeft:"22%"}}>
            <Tabs
              value={tab}
              textColor="inherit"
              onChange={handleChange}
              aria-label="primary tabs example"
              indicatorColor="secondary"
            >
              <Tab value="homepage" label="Homepage" />
              <Tab value="ourwork" label="Our Work" />
              <Tab value="connect" label="Contact Us" />
            </Tabs>
          </div>
        </div>
        <Divider variant="middle"/>
      </header>
      <div className='mainContainer'>
        { tab == "homepage" ? <Homepage changeTab={handleChange}/> : null }
        { tab == "ourwork" ? <OurWork /> : null }
      </div>
    </div>
  );
}

export default App;
