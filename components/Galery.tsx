import React from 'react'

const Galery = () => {
  return (
    <div className="relative" id='gallery'>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-500">
        <h2 className="text-4xl font-bold">Picture 1</h2>
        <p className="mt-2">Scroll Down for next slide</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-teal-500 text-white">
        <h2 className="text-4xl font-bold">Picture 2</h2>
        <p className="mt-2">Scroll Down for next slide</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-500 text-white">
        <h2 className="text-4xl font-bold">Picture 3</h2>
        <p className="mt-2">Scroll Down</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-500 text-black">
        <h2 className="text-4xl font-bold">Picture 4</h2>
    </div>
</div>
  )
}

export default Galery