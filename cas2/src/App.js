import React from 'react';
import { Welcome } from './components/Welcome';
import { Comments } from './components/Comments';
import { Student } from './components/Student';
import { StudentClass } from './components/StudentClass';
import { FruitList } from './components/FruitList';
import { Example } from './components/Example';


var name = 'Filip';
var prezime = 'Trencev';
var age = 26;
var hasComments = true;
var student = {
  name: 'Tome',
  lastName: 'Trencev',
  college: 'Semos'
}

let listaNaOvosje = [


'apple', 'oranges']

export function App() {

  return (
    <div id='app'>
      <StudentClass student={student}/>
      <hr />
      <Welcome name={'Petar'} lastName={'Perovski'} godini={'15'} />
      <hr />
      <h2>Some Content</h2>
      <hr />
      <Welcome name={name} lastName={prezime} godini={age} />
      <hr />
      <Comments hasComments={hasComments} multipleComments={true} />
      <Student student = {student}/>
      <FruitList listOfFruits = {listaNaOvosje}/>
      <Example ime = {name} prezime = {prezime}/>
    </div>
  )
}
