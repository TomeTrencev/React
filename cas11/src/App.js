import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { Cake } from './components/Cake';
import { Nav } from './components/Nav';
import { Comments } from './components/Comments';

export function App(){

  return(
    <div id='app'>
         <h2>App</h2>
         <Nav/>
         <Routes>
           <Route path='cake' element= {<Cake />} />
           <Route path='comments' element= {<Comments />} />
         </Routes>
    </div>
  )
}