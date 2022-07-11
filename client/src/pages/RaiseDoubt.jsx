import React from 'react'
import {TextField,Typography, Button} from "@mui/material"


const RaiseDoubt = () => {
  return (
    <div className='p-10 bg-slate-100'>
      <Typography variant={"h4"} className={"p-10 xs:p-5"}>
        Raise Doubt
      </Typography>
      <div className='w-full min-h-fit bg-slate-200 space-y-5 shadow-xl flex flex-col border-slate-300 border-2 p-5 rounded-lg'>
        <TextField  id="filled-basic2" label="Title" variant="filled" />
        <TextField className="w-full" id="filled-basic2" label="Description" variant="filled" type={"text"} multiline={true} minRows={5}/>
        <Button className='self-end' variant='contained'>Ask Doubt</Button>
      </div>

    </div>
  )
}

export default RaiseDoubt