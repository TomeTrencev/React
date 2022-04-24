import React, { useState, useEffect } from "react";

export function App() {

  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [godini, setGodini] = useState('');
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    setShowTable(true)
  }, [])


  return (
    <div id="app">
      <h2>Table</h2>
      <input
        type='text'
        placeholder='Enter Ime'
        value={ime}
        onChange={(e) => { setIme(e.target.value) }}

      />
      <input
        type='text'
        placeholder="Enter Prezime"
        value={prezime}
        onChange={(e) => { setPrezime(e.target.value) }}
      />
      <input
        type='text'
        placeholder="Enter Email"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <input
        type='text'
        placeholder="Enter Password"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />

      <input
        type='text'
        placeholder="Enter godini"
        value={godini}
        onChange={(e) => { setGodini(e.target.value) }}
      />

      <br />
      {showTable &&
        <table border=''>
          <thead>
            <tr>
              <th>
                Ime
              </th>
              <th>
                Prezime
              </th>
              <th>
                Email
              </th>
              <th>
                Password
              </th>
              <th>
                Godini
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {ime}
              </td>
              <td>
                {prezime}
              </td>
              <td>
                {email}
              </td>
              <td>
                {password}
              </td>
              <td>
                {godini}
              </td>
            </tr>
          </tbody>
        </table>
      }
      <button onClick={() => setShowTable(!showTable)}>Show Table</button>

    </div>

  )
}