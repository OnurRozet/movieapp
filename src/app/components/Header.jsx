"use client"

import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import { useRouter } from 'next/navigation'


const Header = () => {

  const [keywords,setKeywords]=useState();
  const router=useRouter()

  const searchFunc=(e)=>{
    if(e.key==="Enter" && keywords.length>=3){

      router.push(`search/${keywords}`)
    }
  }



  
  const meta=[
    {
      name:"About",
      url:"/about"
    },
    {
      name:"Sign In",
      url:"/login"
    }
  ]


  return (
    <div className='flex items-center  p-5  gap-7 h-20'>
      <div className=' p-4 font-bold bg-amber-500 rounded-2xl'>
        MovieApp
      </div>
      <div className='border flex flex-1 p-3 rounded-lg gap-2 items-center '>
        <input onKeyDown={(e)=>searchFunc(e)} className=' bg-transparent outline-none flex-1' placeholder='Arama Yapınız !!!' type="text" onChange={(e)=>setKeywords(e.target.value)} value={keywords} />
        <FiSearch size={25}/>
      </div>
      <div className=' flex items-center gap-4 text-xl'>
       <ThemeComp/>
        {
          meta.map((item)=>(
            <MenuItem key={item.id} meta={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Header
