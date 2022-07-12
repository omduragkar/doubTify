import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { answerComplete, getDoubtsById } from '../redux/actions/doubtAction';


import {TextField,Typography, Button} from "@mui/material"
import DoubtCard from '../components/DoubtsCard/DoubtCard';
import { useState } from 'react';
const SingleDoubts = () => {
  const [answer, setAnswer] = useState("");
  const doubts = useSelector(state=>state?.tas);
  const userToken = useSelector(state=>state?.userInfo);
  const {doubtId} = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(()=>{
    
    dispatch(getDoubtsById(doubtId))
  },[])
  useEffect(()=>{
    
    if(!userToken.pendingDoubt.status){
      setAnswer("")
      history("/doubts")
    }
  },[userToken.pendingDoubt.status, history])
  return (
    <div className='py-16 p-2 md:p-10 bg-slate-100'>
      <Typography variant={"h4"} className={"py-5 sm:p-10"}>
        Solve Doubts
      </Typography>
      <div className='w-full min-h-fit bg-slate-200 space-y-5 shadow-xl flex flex-col md:flex-row border-slate-300 border-2 p-5 rounded-lg'>
        <div className='lg:w-1/2 '>
          <DoubtCard doubtData={doubts?.assignedDoubt} />
        </div>
        <div className='flex-1 md:m-5 space-y-5'>
          <TextField id="filled-basic-answer"
           className='w-full' label="Answer" variant="filled" 
           value={answer}
           onChange={e=>setAnswer(e.target.value)}
           type={"text"} multiline={true} minRows={5}/>
          <Button className='self-end' 
          variant='contained'
          onClick={e=>{
            let answerObj={
              answer,
              "doubtId":doubts?.assignedDoubt._id,
              by:doubts?.assignedDoubt.doubtBy._id,
              token:userToken.token
            }
            dispatch(answerComplete(answerObj))
            
          }}
          >Answer</Button>
        </div>
      </div>

    </div>

  )
}

export default SingleDoubts