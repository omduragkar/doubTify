import React from 'react'
import ResolveCard from '../components/DoubtsCard/ResolveCard'

const PendingDoubts = () => {
  return (
    <div className='p-10 bg-slate-100'>
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