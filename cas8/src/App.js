import React,{useEffect, useState} from 'react';
import { About } from './components/About';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import {Routes, Route} from 'react-router-dom';
import { Nav } from './components/Nav';
import { ChildComponent  } from './components/ChildComponent';
import { ClassComponents } from './components/ClassComponent';
import { NotFound } from './components/NotFound';
import { Users } from './components/Users';

export function App(){

  const [users,setUsers] = useState([]);

  function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(json=> setUsers(json))
    .catch(err=> alert(err))
  }

  useEffect(()=>{
   getUsers();
  },[])

  return(
    <div id='app'>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}>
        <Route path='us' element={<ChildComponent />} />
         </Route>
         <Route path='/class-component' element={<ClassComponents />} />
         <Route path='/users' element={<Users usersList={users} />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}