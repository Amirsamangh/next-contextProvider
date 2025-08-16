import axios from "axios"
import { jwtDecode } from "jwt-decode"
import GoogleLoginButton from "./GoogleLoginButton"

const { GoogleLogin, useGoogleLogin } = require("@react-oauth/google")


const AuthButton = () => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`
                }
            })
            console.log(res);

        }
    })
    return (
        <GoogleLoginButton onClick={()=> login()} />
    );
}

// const AuthButton = () => {

//     const successLogin = credentialResponse => { 
//         const info = jwtDecode(credentialResponse.credential)
//         console.log(info)
//      }
//     const cathLogin = () => { console.log('Login Failed') }

//     return (
//         <GoogleLogin
//             onSuccess={successLogin}
//             onError={cathLogin}
//         />
//     )
// }

export default AuthButton;