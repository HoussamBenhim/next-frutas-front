import React from 'react'

import { useSession, signIn, signOut } from 'next-auth/react'
import { CustomButton } from '.'
import { SignInOutProps } from '@/types'

const SignInOut = ( {handelClick}:SignInOutProps) => {
  const { data: session, status } = useSession()

  if (status == "loading") {
    return <>
      <CustomButton
        title={"Loading ..."}
      />
    </>
  }else if(session){
    return <>
      <CustomButton 
        title={`logged in as ${session.user?.email}`}
        handelClick={()=>handelClick('logout')}
      />
    </>
  }
  return (
    <><CustomButton
      title={"Log in"}
      handelClick={()=>handelClick('login')}
    /></>
  )
}

export default SignInOut