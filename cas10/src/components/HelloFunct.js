import React,{useEffect} from 'react';
import { sayHello } from '../actions/SayHelloActions';
import {kaziZdravo} from '../actions/KaziZdravo'
import {useDispatch,useSelector} from 'react-redux';

export const HelloFunc = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);
    const pozdrav = useSelector(state=>state.SayHelloReducer.pozdrav)

    useEffect(()=>{
        // dispatch(sayHello());
    },[dispatch])

    return(
        <div id="hello-func">
            <h2>{greeting}</h2>
            <h3>{pozdrav}</h3>
            <button onClick={()=>{dispatch(sayHello())}}>Click Me !</button>
            <button onClick={()=>{dispatch(kaziZdravo())}}>Zdravo</button>
        </div>
    )
} 