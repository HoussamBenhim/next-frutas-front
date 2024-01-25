export async function fetchAllProducts() {
   const heads = {}
   const response = await fetch() 
}


export const firstLetterToUpperCase=(str:String):String=>{
    if(!str || str.length<2) return str;
    return str.substring(0,1).toUpperCase() + str.substring(1);
}

export const classNames=(...classes: string[]):string => {
    return classes.filter(Boolean).join(' ')
}