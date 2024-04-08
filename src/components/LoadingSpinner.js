import React from 'react'
import loader from '../assets/loading.gif'
function LoadingSpinner() {
  return (
    <div>
        <div className='mt-2 w-full h-10'>
       <img className='h-10 items-center justify-center mx-auto' src={loader} alt='loader'/>
      </div>
    </div>
  )
}

export default LoadingSpinner