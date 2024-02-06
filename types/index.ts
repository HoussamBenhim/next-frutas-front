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

export interface SignInOutProps{

    handelClick?:(param:String)=>MouseEventHandler<HTMLButtonElement>|void
}
interface navtIem {
    title: string; active: boolean
  }
export interface navtemsInterface extends Array<navtIem> { }

export interface ProductProps {
    product:Product
}
export interface Product{
    id:string;
    productName:string;
    category:CategoryProps;
    price:number;
    priceUnit:string;
    origin:string;
    description:string;
}
export interface CategoryProps {
    categoryName:string;
    family:string;
}