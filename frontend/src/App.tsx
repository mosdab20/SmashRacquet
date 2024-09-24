// import React, { useState } from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css'
import Login from "./components/login/Login.tsx";
// import React from "react";
import HomePage from "./components/HomePage/HomePage.tsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Login></Login>}></Route>
              <Route path={"/HomePage"} element={<HomePage></HomePage>}></Route>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
