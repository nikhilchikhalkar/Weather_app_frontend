import React from 'react'
import loader from '../assets/loading.gif'
function LoadingSpinner() {
  return (
    <div>
        <div className='m-2 text-center w-full'>
       <img className='h-10 items-center justify-center mx-auto' src={loader} alt='loader'/>
          <h1>Loading...</h1>
      </div>
    </div>
  )
}

export default LoadingSpinner