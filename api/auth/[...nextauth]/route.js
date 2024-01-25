import NextAuth from "next-auth/next";
import KeycloakProvider from "next-auth/providers/keycloak"
import jwt_decode from "jwt-decode" 
import { encrypt } from "../../../utils/encryption";
export const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.FRONTEND_CLIENT_ID}`,
            clientId: `${process.env.AUTH_ISSUER}`
        })
    ],
    callbaks: {
        async jwt({ token, account }) {
            const nowTimeStamp = Math.floor(Date.now()/1000)
            if (account) { //first time signing account will not be null athore wise account will be null
                console.log('callbak')
                token.decoded= jwt_decode(account.access_token)
                token.accessToken = account.access_token
                token.id_token= account.id_token
                token.expires_at= account.expires_at
                token.refresh_token=account.refresh_token
                return token
            }else if(nowTimeStamp<token.expires_at){

                //token has not expired yet, return it
                return token
            }else{
                console.log("Token has expired.will refresh ...");
            }
            return token
        },

        async session({session, token}){
            //send properties to browse
            session.accessToken=encrypt(token.access_token)
            session.id_token= encrypt(token.id_token)
            session.roles= token.decode.realm_access.roles
            session.whatever="houssam"

            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }