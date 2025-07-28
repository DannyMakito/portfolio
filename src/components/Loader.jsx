import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
const{ progress} = useProgress();

  return (
    <Html center className='font-black text-2xl text-center'>
        {progress}%  give me a second. I am loading
    </Html>
  )
}

export default Loader