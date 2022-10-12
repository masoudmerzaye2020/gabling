import React from 'react'
import Link from 'next/link'
import {OnlineNFLBetting }from '../../../../data/onlineNFLBetting'

function index() {
  return (
    <>
    <div>
        {OnlineNFLBetting.map((list,i)=>{
            return(
                <div key={i}>{list.title}
                {list.option.map((option, i)=>{
                    return(
                        <>
                        <div>

                        <div>
                        {option.para}
                        </div>
                        
                        </div>
                        {option.p.map((p,i)=>{
                            return(
                                <>
                                <div>{p.para}</div><br></br>
                                </>
                            )
                        })}

<Link href={option.link}><a>{option.link}</a></Link>

                        
                        </>
                    )
                })}
                </div>
            )
        })}
    </div>
    </>
  )
}

export default index