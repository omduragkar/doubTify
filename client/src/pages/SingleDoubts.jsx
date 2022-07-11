import React from 'react'
import { useParams } from 'react-router-dom'

import {TextField,Typography, Button} from "@mui/material"
import DoubtCard from '../components/DoubtsCard/DoubtCard';
const SingleDoubts = () => {
    const {doubtId} = useParams();
    console.log(doubtId)
  return (
    <div className='py-16 p-2 md:p-10 bg-slate-100'>
      <Typography variant={"h4"} className={"py-5 sm:p-10"}>
        Solve Doubts
      </Typography>
      <div className='w-full min-h-fit bg-slate-200 space-y-5 shadow-xl flex flex-col md:flex-row border-slate-300 border-2 p-5 rounded-lg'>
        <div className='lg:w-1/2 '>
          <DoubtCard/>
        </div>
        <div className='flex-1 md:m-5 space-y-5'>
          <TextField id="filled-basic-answer" className='w-full' label="Answer" variant="filled" type={"text"} multiline={true} minRows={5}/>
          <Button className='self-end' variant='contained'>Answer</Button>
        </div>
      </div>

    </div>

  )
}

export default SingleDoubts