import React from 'react'

const Sidebar = () => {
  return (
    <div className='border sticky top-0  min-w-[250px] h-screen'>
      <div className='flex justify-end items-center'>
        <div className='w-[80%] py-6'>
          <div className='bg-slate-100 py-3 px-6 shadow-lg'>
            Home
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar