// import React, { useState } from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css'
import Login from "./components/Login.tsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Login></Login>}>
                  
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
