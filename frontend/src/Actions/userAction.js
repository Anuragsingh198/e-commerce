import  axios from 'axios'
import { USER_LOGIN_REQUEST,USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants'

 export const   userlogindetails = (email , password) => async (dispatch) => {
    try{
        dispatch({type: USER_LOGIN_REQUEST});
        const config = {headers:{'Content-Type' : 'application/json'}}
        const {data} =  await axios.post('/api/user/login' , {email , password} , config);
        dispatch({type: USER_LOGIN_SUCCESS , payload:data} )

        localStorage.setItem('userInfo' , JSON.stringify(data));
        // dispatch({type: USER_LOGOUT , payload:[]} )
    }catch (error) { 
        dispatch({ type: USER_LOGIN_FAIL, payload:error.response && error.response.data.message ?  error.response.data.message : error.message, });
       }
}