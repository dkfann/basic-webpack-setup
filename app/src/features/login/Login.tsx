import React from 'react'
import { useHistory } from 'react-router-dom'

import style from './Login.css'


export function Login() {
    const history = useHistory()

    return (
        <div className={style.home}>
            <div className={style.title}>Bobest</div>
            <div className={style.form}>
                <input placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={() => history.push('/home')}>Login</button>
            </div>
        </div>
    )
}