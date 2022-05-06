import React from "react";
import Hello from './components/Hello'
import { HelloFunc } from "./components/HelloFunct";

export function App(){

  return(
    <div id="app">
      <HelloFunc />
      <Hello />
    </div>
  )
}