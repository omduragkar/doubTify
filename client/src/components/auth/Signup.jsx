import React from 'react'
import {TextField,Typography, Button, InputLabel, Select, MenuItem, CircularProgress, Alert} from "@mui/material"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { createUser } from '../../redux/actions/userActions'
const Signup = () => {
  const userFetch = useSelector(state=>state?.userInfo);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email:"",
    password:"",
    role:"user"
  })
  const setChange=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }
  const submit = ()=>{
    console.log(data);
    dispatch(createUser(data))
  }
  useEffect(()=>{
    console.log(userFetch)
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
        <TextField className="w-full"
        name='name'
        onChange={e=>setChange(e)}
        value={data.name || ""}
        id="filled-basic" label="Name" variant="filled" type={"text"}/>
        <TextField className="w-full"
        name='email'
        onChange={e=>setChange(e)}
        value={data.email || ""}
        id="filled-basic" label="Email" variant="filled" type={"email"}/>
        <TextField className="w-full"
        name='password'
        onChange={e=>setChange(e)}
        value={data.password || ""}
        id="filled-basic2" label="Password" variant="filled"  type={"password"} />
        <TextField className="w-full"
        name='confirmpassword'
        onChange={e=>setChange(e)}
        value={data.confirmpassword || ""}
        id="filled-basic2" label="Confirm Password" variant="filled" type={"password"} />
        <div className='flex w-full items-center justify-center'>
          <InputLabel>Select Role: </InputLabel>
          <Select label='Select Role' labelId='demo' value={data.role || "user"}>
            <MenuItem onClick={e=>setData({...data, role:"user"})} value={"user"}>user</MenuItem>
            <MenuItem onClick={e=>setData({...data, role:"TA"})} value={"TA"}>Doubt Solver [TA]</MenuItem>
          </Select>
        </div>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
          <Typography variant='text'>Already a user?</Typography>
          <Button variant='outlined'
          onClick={submit}
          >Signup</Button>
          <Typography variant='text'>Other Option?</Typography>
        </div>
        <div></div>
    </div>
    }
    </>
  )
}

export default Signup