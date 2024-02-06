"use client"
import React,{memo} from 'react'
import { useEffect } from 'react'
import {useRouter} from "next/navigation"

const SetDynamicRoute = () => {
  console.log("SetDynamicRoute renders");
  
    const router = useRouter()
    useEffect(()=>{
        router.refresh()
    },[router])
    
    return (
    <></>
  )
}

export default SetDynamicRoute