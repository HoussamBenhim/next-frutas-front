import NextAuth from "next-auth/next";
import KeycloakProvider from "next-auth/providers/keycloak"
import { jwtDecode } from "jwt-decode"
import { encrypt } from "../../../../utils/encryption";
//@ts-ignore
async function refreshAccessToken(token) {
    const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //@ts-ignore
        body: new URLSearchParams({
            client_id: process.env.FRONTEND_CLIENT_ID,
            client_secret: process.env.FRONTEND_CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: token.refresh_token
        }),
       
        method: "POST",
    })
    const refreshToken = await resp.json()
    console.log(refreshToken);
    
    if (!resp.ok) throw console.log("problem refreshing token --------")
    return {
        ...token,
        access_token:refreshToken.access_token,
        decoded:jwtDecode(refreshToken.access_token),
        id_token:refreshToken.id_token,
        expires_at:Math.floor(Date.now()/1000)+refreshToken.expires_in,
        refresh_token: refreshToken.refresh_token
    }
}

export const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.FRONTEND_CLIENT_ID}`,
            issuer: `${process.env.AUTH_ISSUER}`,
            clientSecret: `${process.env.FRONTEND_CLIENT_SECRET}`,
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            const nowTimeStamp = Math.floor(Date.now() / 1000)
            console.log("-------token----------")
            if (account) { //first time signing account will not be null athore wise account will be null
                console.log('---------------callbak acccount---------')
                token.decoded = jwtDecode(account.access_token)
                token.access_token = account.access_token
                token.id_token = account.id_token
                token.expires_at = account.expires_at
                token.refresh_token = account.refresh_token
                return token
            } else if (nowTimeStamp < token.expires_at) {
                //token has'nt expired yet so return it
                return token
            } else {
                console.log("Token has expired.will refresh ...")
                try {
                    const refreshedToken = await refreshAccessToken(token)
                    console.log("Token is refreshed");
                    return refreshedToken
                } catch (error) {
                    console.error("Eroor refreshing access token", error)
                    return {
                        ...token, error: "RefreshAccessTokenError"
                    }
                }
            }
        },

        async session({ session, token }) {
            //send properties to browse
            session.access_token = encrypt(token.access_token)
            session.id_token = encrypt(token.id_token)
            session.roles = token.decoded.resource_access
            session.whatever = "houssam"
            session.error=token.error
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }