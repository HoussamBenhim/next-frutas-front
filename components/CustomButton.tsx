import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({title,containerStyles,handelClick}:CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`w-max rounded-full bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${containerStyles}`}
        onClick={()=>{
          handelClick()
        }}
    >
        <span>{title}</span>
    </button>
  )
}

export default CustomButton