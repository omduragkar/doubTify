import {  Typography } from '@mui/material'
import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <div className='w-full bg-slate-300 p-2 rounded-sm shadow-md my-3 border-slate-500 border-2'>
        <div className='my- 5 flex flex-col md:flex-row'>
          <Typography variant={"subtitle1"}>{comment.by?.name } : </Typography>
          <Typography variant={"subtitle1"}>  {comment.comment} </Typography>
        
        </div>
        
    </div>
  )
}

export default CommentCard