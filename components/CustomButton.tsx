import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({title,containerStyle,handelClick}:CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyle}`}
        onClick={()=>{handelClick}}
    >
        <span>{title}</span>
    </button>
  )
}

export default CustomButton