import { Html } from '@react-three/drei'
import React from 'react'
import { DotLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
        <DotLoader
  color="#b1b1b1"
  size={100}
  speedMultiplier={1}
  loading={3000}
    

/>
        </div>
      </div>
    </Html>
  )
}

export default Loader