import React, {useState, useEffect} from 'react';
import { ClassComponent } from './components/ClassComponent';


export function App() {

  const [promenliva1, setPromenliva1] = useState('Vrednost 1');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [counter, setCounter] = useState(0)

  function smeniVrednost(){
      setPromenliva1('Vrednost 2')
  }

  function vnesenInput (event){
    setUsername(event.target.value)
  }



  function vnesenPassword(event){
    setPassword(event.target.value)
  }

  useEffect(()=>{
    console.log('Component Did Mount')
    console.log(username)
  },[username])

  return(
    <div id='app'>
       <h2>App</h2>
      <ClassComponent />
      <p>{promenliva1}</p>
      <button onClick={()=>{setPromenliva1 ('Vrednost 2')}}>Smeni Vrednost</button>
      <br/>
      <input
      type='text'
      placeholder='Enter Username'
      value={username}
      onChange={vnesenInput}
      />
      <p>{username}</p>
      <input
      type='text'
      placeholder='Enter Password'
      value={password}
      onChange={vnesenPassword}
      />
      {/* <p>{password}</p> */}
      <table border='1'>
        <thead>
          <tr>
            <th>
              {password}
            </th>
          </tr>
        </thead>
      </table>
      <br></br>
      <img onClick={()=>{setCounter(counter + 1)}} 
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' alt=''></img>
      <p>Counter {counter}</p>
    </div>
  )
}