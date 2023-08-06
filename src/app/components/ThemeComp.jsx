"use client"
import React, { useEffect, useState } from 'react'
import {CiDark, CiLight} from 'react-icons/ci'
import { useTheme } from 'next-themes'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme,theme, setTheme } = useTheme()

    const themeMode = theme === "system" ? systemTheme : theme
    console.log(themeMode);
  
   
    useEffect(() => {
      setMounted(true)
    }, [])
  
  return (
    <div className=' cursor-pointer'>
        {
            mounted && (
                theme === "light" ? (
                    <CiDark onClick={()=>setTheme('dark')} size={25}/>
                ) : (
                    <CiLight onClick={()=>setTheme('light')} size={25}/>
                )
            )
        }
       
    </div>
  )
}

export default ThemeComp
