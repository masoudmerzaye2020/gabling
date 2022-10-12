import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Imagewithlink({src, title, link}) {
  return (
    <>
    <div className='mx-auto w-1/2 md:w-1/3 lg:w-1/4 m'>
                    <ul className='flex flex-wrap w-full mx-auto justify-center'>
                        <li className='w-[150px] my-[20px] mx-[10px] '>
                            <div>
                            <Image className='rounded-lg' src={src} width={'150'} height='150' alt='image'/>
                            </div>
                            <div className=' w-[150px] bg-[#fccd1b] text-center py-[2px] rounded-lg my-2'>
                                <Link className='w-[150] ' href={link}>
                                <a className='uppercase'>{title}</a>
                                </Link>
                            </div>   
                        </li> 
                                               
                    </ul>
                </div>
    </>
  )
}
