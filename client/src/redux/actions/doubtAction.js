import { updateMessage, setLoading, addArray } from "../reducers/doubtReducers"
import axios from "axios"
import { addTAArray,  assignetheDoubt, setTaLoading, updateTAMessage } from "../reducers/taReducers";
import { updateArray } from "../reducers/doubtReducers"
import { setUser } from "../reducers/userReducer";
export const raiseDoubt = (doubtData)=>{
    return async (dispatch, getState)=>{
        dispatch(setLoading(true));
        try{

            let apicallfordoubts = await axios.post(
                "https://backendfordoubtify.herokuapp.com/api/doubts/raisedoubt",
                {
                    ...doubtData
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': doubtData.token
                    }
                }
            )
            dispatch(setLoading(false));
            console.log(apicallfordoubts)
            dispatch(updateMessage({
                status:200,
                "message":apicallfordoubts.data.message}))
        }catch(err){
            
            dispatch(setLoading(false));
            dispatch(updateMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }
}

export const getAllDoubt = (token)=>{
    return async (dispatch, getState)=>{
        dispatch(setLoading(true));
        try{
            console.log(token)

            let apicallfordoubts = await axios.get(
                "https://backendfordoubtify.herokuapp.com/api/doubts/alldoubts",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }
            )
            dispatch(setLoading(false));
            dispatch(addArray(apicallfordoubts.data.doubts))
            dispatch(updateMessage({
                status:200,
                "message":apicallfordoubts.data.message}))
        }catch(err){
            
            dispatch(setLoading(false));
            dispatch(updateMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }
}


export const getPendingDoubts = (token)=>{
    return async (dispatch, getState)=>{
        dispatch(setTaLoading(true));
        try{
            console.log(token)

            let apicallfordoubts = await axios.get(
                "https://backendfordoubtify.herokuapp.com/api/doubts/pendingDoubts",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }
            )
            dispatch(setTaLoading(false));
            dispatch(addTAArray(apicallfordoubts.data.doubts))
            dispatch(updateTAMessage({
                status:200,
                "message":apicallfordoubts.data.message}))
        }catch(err){
            
            dispatch(setTaLoading(false));
            dispatch(updateTAMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }
}


export const assignDoubt = ({token, id})=>{
    return async (dispatch, getState)=>{
        dispatch(setTaLoading(true));
        try{

            let apicallfordoubts = await axios.post(
                `https://backendfordoubtify.herokuapp.com/api/doubts/assigningDoubt`,
                {
                    id
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }
            )
            // console.log({
            //     doubt:apicallfordoubts.data
            // })
            dispatch(setTaLoading(false));
            dispatch(assignetheDoubt(apicallfordoubts.data.raisedDoubt))
            dispatch(setUser(apicallfordoubts.data.user));
            dispatch(updateTAMessage({
                status:200,
                "message":apicallfordoubts.data.message}))
        }catch(err){
            
            dispatch(setTaLoading(false));
            dispatch(updateTAMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }
}

export const getDoubtsById = (id)=>{
    return async (dispatch, getState)=>{
        dispatch(setTaLoading(true));
        try{

            let apicallfordoubts = await axios.get(
                `https://backendfordoubtify.herokuapp.com/api/doubts/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            dispatch(setTaLoading(false));
            dispatch(setUser(apicallfordoubts.data.user));
            console.log({
                doubt:apicallfordoubts.data
            })
            dispatch(assignetheDoubt(apicallfordoubts.data.doubt))
            dispatch(updateTAMessage({
                status:200,
                "message":apicallfordoubts.data.message}))
        }catch(err){
            
            dispatch(setTaLoading(false));
            dispatch(updateTAMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }
}

export const answerComplete = (dataBody)=>{
    return async (dispatch, getState)=>{
        dispatch(setTaLoading(true));
        try{

            let apicallfordoubts = await axios.post(
                `https://backendfordoubtify.herokuapp.com/api/doubts/answeringDoubt`,
                {
                    ...dataBody
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': dataBody.token
                    }
                }
            )
            dispatch(setTaLoading(false));
            dispatch(setUser(apicallfordoubts.data.user));

            dispatch(updateTAMessage({
                status:200,
                "message":apicallfordoubts.data.message}))
        }catch(err){
            
            dispatch(setTaLoading(false));
            dispatch(updateTAMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }
}

export const addComment = (commentBody)=>{
    return async (dispatch, getState)=>{
        dispatch(setTaLoading(true));
        try{

            let apicallfordoubts = await axios.post(
                `https://backendfordoubtify.herokuapp.com/api/doubts/addComment`,
                {
                    ...commentBody
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': commentBody.token
                    }
                }
            )
            dispatch(setTaLoading(false));
            dispatch(updateArray(apicallfordoubts.data.doubtwithComment));
            dispatch(assignetheDoubt(apicallfordoubts.data.doubtwithComment));

            dispatch(updateTAMessage({
                status:200,
                "message":apicallfordoubts.data.message || "success"}))
        }catch(err){
            
            dispatch(setTaLoading(false));
            dispatch(updateTAMessage({
                status:400,
                "message":err?.response?err.response.data.message:"error"
            }))
        }
    }

}