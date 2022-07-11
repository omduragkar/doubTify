import React from 'react'
import {TextField,Typography, Button, Select, MenuItem, InputLabel} from "@mui/material"

const Signup = () => {
  return (
    <div className='flex flex-col px-5 space-y-5 justify-center items-center'>
        <div></div>
        <TextField className="w-full" id="filled-basic" label="Name" variant="filled" type={"text"}/>
        <TextField className="w-full" id="filled-basic" label="Email" variant="filled" type={"email"}/>
        <TextField className="w-full" id="filled-basic2" label="Password" variant="filled"  type={"password"} />
        <TextField className="w-full" id="filled-basic2" label="Confirm Password" variant="filled" type={"password"} />
        <div className='flex w-full items-center justify-center'>
          <InputLabel>Select Role: </InputLabel>
          <Select label='Select Role' labelId='demo'>
            <MenuItem value={"user"}>user</MenuItem>
            <MenuItem value={"TA"}>Doubt Solver[TA]</MenuItem>
          </Select>
        </div>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
            <Typography variant='text'>Already a user?</Typography>
            <Button variant='outlined'>Signup</Button>
            <Typography variant='text'>Other Option?</Typography>
        </div>
        <div></div>
    </div>
  )
}

export default Signup