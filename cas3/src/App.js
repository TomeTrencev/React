import React from 'react';
import { Users } from './components/Users'
import { Comments } from './components/Comments';
import { Car } from './components/Car';

const user1 = {
    ime: 'Tome',
    username: 'tomet',
    mail: 'trencevtome@yahoo.com'
}

const numId = 123;

let comments = [
    {author:'Tome', content:'This is my first comment!'},
    {author:'Pero', content:'Secound comment on the way'},
    {author:'Simon', content:'Third and final comment'}
];

var cifra = 5;

let registracija = [
    {grad:{naselba:'Kavadarci', ulica:'Sremski Front'}, oznaka:'KA-1234-AB'},
    {grad:{naselba:'Radisani', ulica:'Kiro Spandoz'}, oznaka:'SK-3456-AC'},
    {grad:{naselba:'Prilep', ulica:'Prilepska'}, oznaka:'PP-9789-AC'}
]

let cars = [
    {brand:'ford', model:'Fiesta', year:2003, plates:registracija[0]},
    {brand:'opel', model:'Corsa', year:2011, plates:registracija[1]},
    {brand:'Zastava', model:'101', year:1987, plates:registracija[2]}
]

let data = '12/04/2022'

export function App() {

    return (
        <div id='app'>
            <h2>App</h2>
            <Users korisnik1={user1} korisnik2={numId}/>
            <Comments listOfComments={comments} cifra={cifra}/>
            <Car vozila ={cars} datum={data}/>
        </div>
    )
}