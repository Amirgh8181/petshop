import AuthHoc from '@/components/Auth/AuthHoc'
import LoginForm from '@/components/Auth/login/LoginForm'
import React from 'react'

const LoginContainer = () => {
    return (
        <div>
            <AuthHoc mainImage={"/images/AuthPic/login1.png"} leftImage={"/images/AuthPic/login2.png"} rightImage={"/images/AuthPic/login3.png"} authType={"Login"}>
                <LoginForm />
            </AuthHoc>
        </div>
    )
}

export default LoginContainer