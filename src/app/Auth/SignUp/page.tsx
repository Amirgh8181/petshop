import AuthHoc from '@/components/Auth/AuthHoc'
import SignUpForm from '@/components/Auth/SignUp/SignUpForm'
import React from 'react'

const SignUpContainer = () => {
    return (
        <div>
            <AuthHoc mainImage={"/images/AuthPic/signUp-main2.png"} leftImage={"/images/AuthPic/signUp-left.png"} rightImage={"/images/AuthPic/login-right.png"} authType={"SignUp"}>
                <SignUpForm />
            </AuthHoc>
        </div >
    )
}

export default SignUpContainer