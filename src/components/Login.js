import React from 'react'
import { GoogleLogin } from 'react-google-login'

const Login = () => {

    const onSuccess=(res)=>{
        console.log(res.profileObj)

    }
   const onFailure=(res)=>{
console.log(res)
   }
  return (
    <div>
    <GoogleLogin clientId='430738811457-h37pi95djmat7jm4kj9836rk9r2s2p2l.apps.googleusercontent.com'
    buttonText='Signup'
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy='single_host_origin'
    isSignedIn={true}
    />
    </div>
  )
}

export default Login