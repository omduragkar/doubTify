import React from 'react'
import {TextField,Typography, Button, CircularProgress, Alert} from "@mui/material"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { userLogin } from '../../redux/actions/userActions'
const Login = () => {
  const userFetch = useSelector(state=>state.userInfo);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [data, setData] = useState({
    email:"",
    password:""
  })
  const submit = ()=>{
    console.log(data);
    dispatch(userLogin(data));
  }
  useEffect(()=>{
    if(userFetch.isLogin && userFetch.status == "success"){
      history("/dashboard")
    }
  },[history, userFetch])
  return (
    <>
    {
      (userFetch.status != "idle" && userFetch.status != "success" && userFetch.status != "") &&
      <Alert variant={"outlined"} 
      color={"error"}
      sx={{m:3}}
      >{userFetch.status}</Alert>
    }
    {userFetch.loading?
    <div className='w-full flex justify-center items-center p-5'>
      <CircularProgress color="success" />
    </div>
      :
      <div className='flex flex-col px-5 space-y-5 justify-center items-center'>
        <div></div>
        <TextField className="w-full" id="filled-basic" label="Email" name="email" variant="filled"
          onChange={e=>setData({...data, [e.target.name]:e.target.value})}
          value={data.email || ""} />
        <TextField className="w-full" id="filled-basic2" label="Password" name="password" variant="filled"  type={"password"}
          onChange={e=>setData({...data, [e.target.name]:e.target.value})}
          value={data.password || ""} />
        <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
            <Typography variant='text'>Forgot Password?</Typography>
            <Button variant='outlined'
            onClick={submit}
            >Login</Button>
            <Typography variant='text'>New user?</Typography>
        </div>
        <div></div>
      </div>
    }
    </>

  )
}

export default Login