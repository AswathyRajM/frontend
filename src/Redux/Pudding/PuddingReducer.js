import { BUY_PUDDING } from './PuddingTypes'

const initialState = {
    numberOfPudding : 25
}

const buyPudding = (state=initialState, actions) => {
    switch(actions.type){
        case BUY_PUDDING: return{
            ...state,
            numberOfPudding: state.numberOfPudding -1
        }
        default: return state
    }
}
export default buyPudding