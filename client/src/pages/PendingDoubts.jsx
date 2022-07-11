import { Typography } from '@mui/material'
import React from 'react'
import ResolveCard from '../components/DoubtsCard/ResolveCard'

const PendingDoubts = () => {
  return (
    <div className='py-16 p-2 md:p-16 bg-slate-100'>
      <Typography variant={"h4"} className={"py-5 md:py-8 md:px-2"}>
        Raised Doubt
      </Typography>
      <div  className='my-5 flex flex-wrap flex-col gap-5'>
        {
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(v=>(
            <ResolveCard/>
          ))
        }
      </div>

    </div>
  )
}

export default PendingDoubts