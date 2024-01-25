import { authOptions } from "../[...nextauth]/route";
import {getServerSession} from "next-auth"
import { getIdToken } from "@/utils/sessionTokenAccessor";


export async function GET(){
    console.log("--------------GET METHOD CALL------------------");
    
    const session = await getServerSession(authOptions)
    if(session){
        const idToken =await getIdToken()
        //url to log out the user on keyclaok side
        var url = `${process.env.END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL)}`
        try {
            console.log(url);
            const resp = await fetch(url,{method:"GET"})
            console.log(resp);
            
        } catch (error) {
            console.error(error)
            return new Response({status:500})
        }
    }
    return new Response({status:200})
}