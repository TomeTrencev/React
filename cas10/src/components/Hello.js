import React from "react";
import {connect} from 'react-redux'
import {sayHello} from './../actions/SayHelloActions'
import { kaziZdravo } from "../actions/KaziZdravo";

 class Hello extends React.Component{

    componentDidMount(){
        this.props.getGreeting()
        this.props.getZdravo()
        
    }

    render(){
        return(
            <div id="hello">
                <h2>{this.props.greeting}</h2>
                <h3>{this.props.pozdrav}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        greeting: state.SayHelloReducer.greeting
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getGreeting: ()=>{
            dispatch(sayHello())
        },
        getZdravo: ()=>{
            dispatch(kaziZdravo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)