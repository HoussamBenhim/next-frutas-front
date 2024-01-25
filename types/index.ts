import {MouseEventHandler} from "react"
export interface CustomButtonProps{
    title: String;
    containerStyles?: String;
    handelClick?:(param:String)=>MouseEventHandler<HTMLButtonElement>
}

export interface SearchProductProps{
    product: String;
    setProduct:(product:string)=>void
}

export interface SignInOutProps{

    handelClick?:(param:String)=>MouseEventHandler<HTMLButtonElement>|void
}