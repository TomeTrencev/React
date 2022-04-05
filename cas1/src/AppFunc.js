import React from 'react';
import { Hello } from './components/Hello';
import './css/AppFunc.css';
import { Zdravo } from './components/Zdravo';

export function AppFunc(){

    return(
        <div className='filip' id='app-func'>
           <h2>Functunional Component Text</h2>
           <Hello/>
           <Zdravo/>
           <p>{5+3}</p>
        </div>
        
    )
}