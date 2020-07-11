import React from 'react'
import { buyCandy } from '../Redux'
import { connect } from 'react-redux'

function CandyContainer(props){
    return(
        <div>
            <h2>Number of Candy : {props.numberOfCandy}</h2>
            <button onClick={props.buyCandy}>Buy Candy</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numberOfCandy : state.candy.numberOfCandy
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCandy:()=>dispatch(buyCandy())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CandyContainer); 