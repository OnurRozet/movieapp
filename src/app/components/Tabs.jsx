"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const tabs=[
  {name:'En Popüler',link:"popular"},
  {name:'Son Çıkanlar', link:"top_rated"},
  {name:'Pek Yakında', link:"upcoming"}

]
const Tabs = () => {

  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")
 

  return (
    <div className=' p-5 flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
      {
        tabs.map((item)=>(
          
          <div className=' mx-7 text-lg font-serif' key={item.id}>
          <Link className={`opacity-100 hover:opacity-50 transition-opacity ${item.link === genre ? " underline underline-offset-8 text-amber-700": ""}`} href={`/?genre=${item.link}`}>{item.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Tabs
