
import { Button, Typography } from '@mui/material'
import React from 'react'
import { assignDoubt } from '../../redux/actions/doubtAction'
import { useDispatch, useSelector } from 'react-redux'
const ResolveCard = ({doubt}) => {
  const token = useSelector(state=>state.userInfo.token);
  const dispatch = useDispatch();
  return (
    <div className='w-full bg-slate-200 p-3 md:pr-16 rounded-sm shadow-md border-slate-400 border-2'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex-1'>
            <Typography variant={"h5"}>{doubt.doubt}</Typography>
          </div>
          <div className="my-2 md:my-0">
            <Button variant={"contained"} color='info'
            onClick={e=>{
              console.log(doubt._id)
              dispatch(assignDoubt({id:doubt._id, token}))
            }}
            >Accept</Button>
          </div>
        </div>
    </div>
  )
}

export default ResolveCard