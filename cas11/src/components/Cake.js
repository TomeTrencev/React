import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {buyCake, restockCakes} from './../actions/CakeActions'

export const Cake = () => {
    const dispatch = useDispatch();
    const cakes = useSelector(state=> state.CakeReducer.cakes)
    const message = useSelector(state=> state.CakeReducer.message)

    const [addCake, setAddCake] = useState('')
    return(
        <div id="cake">
          <h2>Cakes : {cakes}</h2>
          {message && <p>{message}</p>}
          <input
          type='text'
          placeholder="Enter Num of Cakes"
          value={addCake}
          onChange={(e)=>{setAddCake(e.target.value)}}
          />
          <button >Kupi Torta</button>
          <button disabled={cakes<1} onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
          <button disabled={cakes<2} onClick={()=>{dispatch(buyCake(2))}}>Buy 2 cakes</button>
          <button disabled={cakes<3} onClick={()=>{dispatch(buyCake(3))}}>Buy 3 cakes</button>
          <button onClick={()=>{dispatch(restockCakes())}}>Restock Cakes</button>
        </div>
    )
}