import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import CommentCard from './CommentCard'

import { useDispatch, useSelector } from "react-redux"
import { addComment } from "../../redux/actions/doubtAction"
const DoubtCard = ({doubtData}) => {
  const token = useSelector(state=>state.userInfo.token);
  const tA = useSelector(state=>state.tas);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  return (
    <div className='w-full bg-slate-200 p-2 sm:p-5 rounded-sm shadow-md border-slate-400 border-2'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <Typography variant={"h5"}>{doubtData?.doubt}</Typography>
            <Typography variant={"subtitle1"}>{doubtData?.description}</Typography>
          </div>
          <div>
          {
            doubtData?.doubtStatus == "doubt_resolved" && 
            <Button variant={"contained"} color='success'>Resolved</Button>
          }
          </div>
        </div>
        <div>
          <Typography variant={"subtitle2"} className={"w-full text-right"}>Asked By: {doubtData?.doubtBy?.name} on {new Date(doubtData?.createdAt).toDateString()}</Typography>
        </div>
        <div>
        {doubtData?.Answer
        &&
        <>
          <Typography variant={"body1"} className={"w-full"}><span className='font-medium'>Answer:  </span> {doubtData?.Answer?.Answer}</Typography>
          <Typography variant={"subtitle2"} className={"w-full"}>Answered By: {doubtData?.Answer?.by?.name}</Typography>
        </>
        }
        </div>
        <div className='h-0.5 w-full bg-slate-500 my-3'></div>
        <div>
          <p>
            {doubtData?.comments.length} Comments
          </p>
          <div>
            {doubtData?.comments.map(v=>(
              <CommentCard comment={v}/>
            ))}
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <TextField className='flex-1' onChange={e=>setComment(e.target.value)} value={comment}/>
            
            <Button
            onClick={()=>{
              if(comment){
                let commentObj={
                  comment,
                  id:doubtData._id,
                  token
                }
                dispatch(addComment(commentObj))
                setComment("")
              }else{
                alert("Write something in comment!")
              }
            }}
            disabled={tA.loading}
            >Comment
            </Button>
          </div>
        </div>
    </div>
  )
}

export default DoubtCard