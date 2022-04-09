import React from "react";

export const FruitList = (props) => {
    console.log(props);
    return(
        <div id="fruitList">
            <h2>Fruit List:</h2>
            <ul>              
             {props.listOfFruits.map((fruit, i)=>{
                 return(
                     <li key={i}>{fruit}</li>
                 )
             })}
            </ul>
        </div>
    )
}