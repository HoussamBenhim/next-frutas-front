import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { decrypt } from "./encryption";

export async function getAccessToken(){
    const session = await getServerSession(authOptions)
    if(session){
        console.log('session access token');
        console.log(session.access_token);
        const accessTokenDecrypted = decrypt(session.access_token)
        return accessTokenDecrypted
    }
    return null
}

export async function getIdToken(){
    
    const session = await getServerSession(authOptions)
    console.log('session is : ');
    
    console.log(session);
    
    if(session){
        console.log('session id token');
        console.log(session.id_token);
        const idTokenDecrypted = decrypt(session.id_token)
        return idTokenDecrypted
    }
    return null
}
