import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DoubtCard from '../components/DoubtsCard/DoubtCard'
import { getAllDoubt } from '../redux/actions/doubtAction';

const Dashboard = () => {
  
  const userFetch = useSelector(state=>state?.userInfo);
  const doubts = useSelector(state=>state?.doubts);
  const history = useNavigate();
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!userFetch.isLogin){
      history("/auth/login")
    }
  },[history, userFetch])
  useEffect(()=>{
    dispatch(getAllDoubt(userFetch.token))
  },[])
  return (
    <div className='px-2 py-10 sm:p-10 mt-12 '>

      <div>

      </div>
      <Typography variant={"h4"}>Home</Typography>
      <Typography variant={"p"} className={"w-full"} textAlign={"end"}>{doubts?.doubtArray?.length} Doubts</Typography>
      <div className='my-5 flex flex-wrap flex-col gap-5'>
        {
          doubts?.doubtArray?.map(doubt=>(
            <DoubtCard doubtData = {doubt}/>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
