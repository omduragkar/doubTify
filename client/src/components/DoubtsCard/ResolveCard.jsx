
import { Button, Typography } from '@mui/material'
import React from 'react'
const ResolveCard = () => {
  return (
    <div className='w-full bg-slate-200 p-3 md:pr-16 rounded-sm shadow-md border-slate-400 border-2'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex-1'>
            <Typography variant={"h5"}>How do rain happen?How do rain happen?</Typography>
          </div>
          <div className="my-2 md:my-0">
            <Button variant={"contained"} color='info'>Accept</Button>
          </div>
        </div>
    </div>
  )
}

export default ResolveCard