import { Typography } from '@mui/material'
import React from 'react'
import DoubtCard from '../components/DoubtsCard/DoubtCard'

const Dashboard = () => {
  return (
    <div className='p-10'>
      <Typography variant={"h4"}>Home</Typography>
      <Typography variant={"p"} className={"w-full"} textAlign={"end"}>52 Doubts</Typography>
      <div  className='my-5 flex flex-wrap flex-col gap-5'>
        {
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(v=>(
            <DoubtCard/>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
