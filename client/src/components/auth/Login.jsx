import React from 'react'
import {TextField,Typography, Button} from "@mui/material"
const Login = () => {
  return (
    <div className='flex flex-col px-5 space-y-5 justify-center items-center'>
        <div></div>
        <TextField className="w-full" id="filled-basic" label="Email" variant="filled" />
        <TextField className="w-full" id="filled-basic2" label="Password" variant="filled"  type={"password"} />
        <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
            <Typography variant='text'>Forgot Password?</Typography>
            <Button variant='outlined'>Login</Button>
            <Typography variant='text'>New user?</Typography>
        </div>
        <div></div>
    </div>
  )
}

export default Login