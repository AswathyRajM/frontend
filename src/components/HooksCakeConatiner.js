import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from '../Redux';

function HooksCakeContainer(){
    const numCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>(Using Hooks) Number of Cakes : {numCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}
export default HooksCakeContainer