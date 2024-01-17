import AuthHoc from '@/components/Auth/AuthHoc'
import SignUpForm from '@/components/Auth/SignUp/SignUpForm'
import React from 'react'

const SignUpContainer = () => {
    return (
        <div>
            <AuthHoc mainImage={"/images/AuthPic/signUp1.png"} leftImage={"/images/AuthPic/signUp2.png"} rightImage={"/images/AuthPic/login3.png"} authType={"SignUp"}>
                <SignUpForm />
            </AuthHoc>
        </div >
    )
}

export default SignUpContainer