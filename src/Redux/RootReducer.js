import { combineReducers } from 'redux'
import cakeReducer from './Cakes/CakeReducer'
import iceCreamReducer from './Icecreams/IcecreamReducer'
import candyReducer from './Candy/CandyReducer'
import puddingReducer from './Pudding/PuddingReducer'
import userReducer from './User/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    candy: candyReducer,
    pudding: puddingReducer,
    user: userReducer
})

export default rootReducer