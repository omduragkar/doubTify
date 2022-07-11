import {  Typography } from '@mui/material'
import React from 'react'

const CommentCard = () => {
  return (
    <div className='w-full bg-slate-300 p-2 rounded-sm shadow-md my-3 border-slate-500 border-2'>
        <div className='my- 5 flex flex-col md:flex-row'>

            <Typography variant={"subtitle1"}>Om Duragkar:   </Typography>
            <Typography variant={"subtitle1"}> Description to it is a long </Typography>
        
        </div>
        
    </div>
  )
}

export default CommentCard