import React from 'react'
import { buyPudding } from '../Redux'
import { useSelector, useDispatch} from 'react-redux'

function PuddingContainer (props) {
    const numofpudding = useSelector(state => state.pudding.numberOfPudding)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Buy Pudding : {numofpudding}</h2>
            <button onClick = { ()=> dispatch(buyPudding())}>Buy Pudding</button>
        </div>
    )
}
export default PuddingContainer