import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CommentCard from './CommentCard'

const DoubtCard = () => {
  return (
    <div className='w-full bg-slate-200 p-5 rounded-sm shadow-md border-slate-400 border-2'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <Typography variant={"h5"}>How do rain happen?</Typography>
            <Typography variant={"subtitle1"}>Description to it</Typography>
          </div>
          <div>
            <Button variant={"contained"} color='success'>Resolved</Button>
          </div>
        </div>
        <div>
          <Typography variant={"subtitle2"} className={"w-full text-right"}>Asked By: Om Duragkar</Typography>
        </div>
        <div>
          <Typography variant={"body1"} className={"w-full"}><span className='font-medium'>Answer: </span>Khud puch</Typography>
          <Typography variant={"subtitle2"} className={"w-full"}>Answered By: Om Duragkar</Typography>
        </div>
        <div className='h-0.5 w-full bg-slate-500 my-3'></div>
        <div>
          <p>
              2 Comments
          </p>
          <div>
            {[1,1].map(v=>(
              <CommentCard/>
            ))}
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <TextField className='flex-1'/>
            <Button>Comment</Button>
          </div>
        </div>
    </div>
  )
}

export default DoubtCard