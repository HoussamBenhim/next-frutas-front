"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({title,containerStyles,handelClick}:CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={"button"}
        className={` ${containerStyles} w-max rounded-full bg-green px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={
          (e)=>handelClick?.(e)
        }
    >
        <span>{title}</span>
    </button>
  )
}

export default CustomButton