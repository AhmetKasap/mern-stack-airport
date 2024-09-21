import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    < >
      <div className='flex flex-col   gap-4'>
        <Image className='border rounded-xl' width={500} height={500} src="/img/side-bar-1.jpg"></Image>
        <Image className='border rounded-xl' width={500} height={300} src="/img/side-bar-2.jpg"></Image>
        <Image className='border rounded-xl' width={500} height={300} src="/img/side-bar-3.jpg"></Image>
      </div>

    </>
  )
}

export default SideBar