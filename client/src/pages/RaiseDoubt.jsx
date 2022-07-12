import React, { useState } from 'react'
import {TextField,Typography, Button, Alert, AlertTitle} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { raiseDoubt } from '../redux/actions/doubtAction';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { updateTAMessage } from '../redux/reducers/taReducers';
import { updateMessage } from '../redux/reducers/doubtReducers';


const RaiseDoubt = () => {
  const [data, setData] = useState({})
  const userFetch = useSelector(state=>state?.userInfo);
  const doubts = useSelector(state=>state?.doubts);
  const dispatch = useDispatch()
  
  const submit=()=>{
    console.log({...data, token: userFetch.token})
    dispatch(raiseDoubt({...data, token: userFetch.token}))

  }
  useEffect(()=>{
    dispatch(updateTAMessage({
      message:"",
      status: ""
    }))
    dispatch(updateMessage({
      message:"",
      status: ""
    }))
  },[])
  useEffect(() => {
    if(doubts.status == 200){
      setData({});
    }
  }, [doubts.status])
  
  
  return (
    <div className='py-14 p-2 sm:p-10 bg-slate-100'>
      <Typography variant={"h4"} className={"pt-10 pb-5 md:py-14 md:px-2"}>
        Raise Doubt
      </Typography>
      <div className='m-2'>
        {(doubts.status && doubts.status != 200) && <Alert severity="error">{doubts.message}</Alert>}
        {doubts.status == 200 && (<Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {doubts.message}
          </Alert>)}
      </div>
      <div className='w-full min-h-fit bg-slate-200 space-y-5 shadow-xl flex flex-col border-slate-300 border-2 p-5 rounded-lg'>
        <TextField 
        name="title"
        onChange={e=>{
          setData({...data, [e.target.name]:e.target.value})
        }}
        value={data.title || ""}
        id="filled-basic2" label="Title" variant="filled" />
        <TextField 
        name="description"
        onChange={e=>{
          setData({...data, [e.target.name]:e.target.value})
        }}
        value={data.description || ""}
        className="w-full" id="filled-basic2" label="Description" variant="filled" type={"text"} multiline={true} minRows={5}/>
        <Button className='self-end' variant='contained'
        onClick={submit}
        >Ask Doubt</Button>
      </div>

    </div>
  )
}

export default RaiseDoubt