import axios from 'axios'
import {
FETCH_USER_ERROR,
FETCH_USER_REQUEST,
FETCH_USER_SUCCESS
} from './UserType'

export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}
    const fetchUserSuccess = users => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserError= error => {
    return{
        type: FETCH_USER_ERROR,
        payload: error
    }
}
export const fetchUsers = () =>{
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            }).catch(error => {
                const errMsg = error.message 
                dispatch(fetchUserError(errMsg))
            })
    }
}