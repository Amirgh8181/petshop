import AuthHoc from '@/components/Auth/AuthHoc'
import LoginForm from '@/components/Auth/login/LoginForm'
import React from 'react'

const LoginContainer = () => {
    return (
        <div>
            <AuthHoc mainImage={"/images/AuthPic/login-main.png"} leftImage={"/images/AuthPic/login-left.png"} rightImage={"/images/AuthPic/login-right.png"} authType={"Login"}>
                <LoginForm />
            </AuthHoc>
        </div>
    )
}

export default LoginContainer