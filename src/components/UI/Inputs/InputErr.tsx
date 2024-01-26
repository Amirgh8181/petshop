import React from 'react'
import Styles from './login.module.css'
const InputErr = ({err}:{err:string}) => {
    return (
        <span className={Styles.authErr}>
            {err}
        </span>
    )
}

export default InputErr