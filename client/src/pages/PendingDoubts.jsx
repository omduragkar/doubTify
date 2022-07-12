import { Alert, AlertTitle, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ResolveCard from '../components/DoubtsCard/ResolveCard'
import { getPendingDoubts } from '../redux/actions/doubtAction';

const PendingDoubts = () => {
  const userData = useSelector(state=>state?.userInfo);
  const tas = useSelector(state=>state?.tas);
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(()=>{
    
    dispatch(getPendingDoubts(userData.token))
  },[])
  useEffect(()=>{
    if(userData.pendingDoubt.status){
      history(`/assigned/${userData.pendingDoubt.id}`)
    }
    
  },[userData.pendingDoubt, history])
  return (
    
    <div className='py-16 p-2 md:p-16 bg-slate-100'>
      <Typography variant={"h4"} className={"py-5 md:py-8 md:px-2"}>
        Raised Doubt
      </Typography>
     {

      tas.loading?
      <div className='w-full h-screen flex justify-center items-center'>
        <CircularProgress color="inherit" />
    </div>
    :
    <>
      {userData.pendingDoubt.status?
        <>
          <Alert><AlertTitle>Warning</AlertTitle> Doubt Already Assigned. Please Complete to Unlock!</Alert>
          <Button variant='contained'
          onClick={e=>{
            history(`/assigned/${userData.pendingDoubt.id}`)
          }}
          >Solve Doubt</Button>
        </>

      :
        <div  className='my-5 flex flex-wrap flex-col gap-5'>
          {
            tas.pendingArray.length === 0?
            <>
            <Alert variant='outlined' color="success">
              No Pending Doubts!
            </Alert>
            </>
            :
            tas.pendingArray.map(pendingDoubt=>(
              <ResolveCard doubt = {pendingDoubt}/>
              ))
          }
        </div>
      }
    </>

    }

    </div>
  )
}

export default PendingDoubts