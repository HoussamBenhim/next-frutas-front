import {MouseEventHandler} from "react"
export interface CustomButtonProps{
    title: String;
    containerStyles?: String;
    handelClick?:MouseEventHandler<HTMLButtonElement>
}

export interface SearchProductProps{
    product: String;
    setProduct:(product:string)=>void
}