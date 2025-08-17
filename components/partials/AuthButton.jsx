// import axios from "axios"
import { jwtDecode } from "jwt-decode"
// import GoogleLoginButton from "./GoogleLoginButton"
import { signIn, signOut, useSession } from 'next-auth/react'
import GithubLoginButton from './GithubLoginButton';
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

// const { GoogleLogin, useGoogleLogin } = require("@react-oauth/google")

// const AuthButton = () => {
//     const { data: session } = useSession()

//     return (
//         <button
//             className='flex w-full items-center justify-center gap-3 rounded-3xl
//                bg-white px-4 py-2 mx-4 text-neutral-800
//                shadow-sm ring-1 ring-neutral-200 transition-all
//                hover:shadow-md hover:ring-neutral-300 cursor-pointer'
//                onClick={()=>signIn()}
//         >
//             sign in
//         </button>
//     )

//     // return session ? (
//     //     // <GithubLoginButton onclick={()=>signOut()} text={session.user.name} />
//     //     <GithubLoginButton onclick={()=>signOut()} text={session.user.name} />

//     // ) : (
//     //     <GithubLoginButton onclick={()=>signIn()} />
//     // )
// }


// const AuthButton = () => {
//     const login = useGoogleLogin({
//         onSuccess: async (tokenResponse) => {
//             const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//                 headers: {
//                     Authorization: `Bearer ${tokenResponse.access_token}`
//                 }
//             })
//             console.log(res);

//         }
//     })
//     return (
//         <GoogleLoginButton onClick={() => login()} />
//     );
// }

const AuthButton = () => {
    const router = useRouter()

    const successLogin = credentialResponse => { 
        const token = 'sdfbdsamfdioewu'
        const cookieSotre = new Cookies(null, {path:'/'})
        cookieSotre.set('loginToken', token)
        router.push('/usersPanel')
        const userInfo = jwtDecode(credentialResponse.credential)
        console.log(userInfo)
     }
    const cathLogin = () => { console.log('Login Failed') }

    return (
        <GoogleLogin
            onSuccess={successLogin}
            onError={cathLogin}
        />
    )
}

export default AuthButton;