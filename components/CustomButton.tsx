import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({title,containerStyles,handelClick}:CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={()=>{handelClick}}
    >
        <span>{title}</span>
    </button>
  )
}

export default CustomButton