import React from 'react';
import { buyIcecream } from '../Redux';
import { connect } from "react-redux";

function IcecreamContainer(props){
        return (           
            <div>
                <h2>Number of Icecreams  : {props.numberOfIcecreams}</h2>
                <button onClick={props.buyIcecream}>Buy Icecreams</button>
            </div>
            )   
}

const mapStateToProps = state => {
    return{
        numberOfIcecreams: state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IcecreamContainer); 