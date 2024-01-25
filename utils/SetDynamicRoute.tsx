"use client"
import React from 'react'
import { useEffect } from 'react'
import {useRouter} from "next/navigation"

const SetDynamicRoute = () => {
    const router = useRouter()
    
    useEffect(()=>{
        router.refresh()
    },[router])
    
    return (
    <></>
  )
}

export default SetDynamicRoute