import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Bluebutton({link, title}) {
  return (
    <>
      <Link href={link}>
      <div className='w-full md:w-1/2 p-4'>
        <div className='bg-[#06c] rounded-full flex py-[4px] px-[3px]  text-white hover:text-[#06c] hover:bg-white border-2 border-[#06c]  align-center'>
          <div className='w-10/12 my-auto justify-center  text-sm md:text-lg pl-2'>
          {title}
          </div>
          <div className='w-2/12 flex my-auto justify-center  '>
              <div className='h-[25px] w-[26px] flex m-1 justify-center rounded-full bg-[#fccd1b]  '>
              <Image className='' src='/svg/right-arrow.svg' width='15' height='15' alt='svg' />
              </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}
