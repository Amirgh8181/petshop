import React from 'react'
import Styles from './login.module.css'

const InputLabel = ({children,text}:{children:React.ReactNode,text:string}) => {
  return (
    <div className={Styles.authLabel}>
    <div className={Styles.authLabelIcon}>{children}</div>
    <div className={Styles.authLabelText}>{text}</div>
</div>
  )
}

export default InputLabel