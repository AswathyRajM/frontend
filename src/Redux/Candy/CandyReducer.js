import { BUY_CANDY } from './CandyTypes'

const initialstate = {
    numberOfCandy: 30
}

const candyReducer = (state=initialstate, action) =>{
    switch(action.type){
        case BUY_CANDY : return{
            ...state,
            numberOfCandy: state.numberOfCandy-1
        }
        default: return state
    }
}

export default candyReducer