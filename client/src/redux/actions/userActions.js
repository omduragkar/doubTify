import { loguserOut, setLoading, setUser } from "../reducers/userReducer"
import axios from 'axios';
export const userLogin = ({email, password})=>{
    return async (dispatch, getState)=>{
        dispatch(setLoading({
            loading:true,
            status:"idle"
        }))
        
        try{
            let apicallforUser = await axios.post("http://localhost:5000/api/user/login", {email, password},{
                headers: {'Content-Type': 'application/json'}
            })
            // console.log()
            dispatch(setUser({...apicallforUser.data, isLogin:true}))
            dispatch(setLoading({
                loading:false,
                status:"success"
            }))
        }catch(err){
            console.log(err.response.data.message)
            dispatch(setLoading({
                loading:false,
                status:err?.response?.data?.message || "error"
            }))

        }
    }
}



export const createUser = (userData)=>{
    return async (dispatch, getState)=>{
        dispatch(setLoading({
            loading:true,
            status:"idle"
        }))
        
        try{
            let apicallforUser = await axios.post("http://localhost:5000/api/user/createlocal", userData,{
                headers: {'Content-Type': 'application/json'}
            })
            
            dispatch(setUser({...apicallforUser.data, isLogin:true}))
            dispatch(setLoading({
                loading:false,
                status:"success"
            }))
        }catch(err){
            console.log(err.response.data.message)
            dispatch(setLoading({
                loading:false,
                status:err?.response?.data?.message || "error"
            }))

        }
    }
}


export const userLogout = ()=>{
    return async (dispatch, getState)=>{
        localStorage.removeItem("userInfo"); 
        dispatch(loguserOut())
    }
}