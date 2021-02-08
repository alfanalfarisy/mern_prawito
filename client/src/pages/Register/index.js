import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'
import './register.scss'
import {useHistory} from 'react-router-dom';

const Register = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="fullname" placeholder="fullname"/>
                <Gap height={13}/>
                <Input label="email" placeholder="email"/>
                <Gap height={13}/>
                <Input label="password" placeholder="password"/>
                <Gap height={20}/>
                <Button title="GET"/>
                <Gap height={30}/>
                <Link title="Login" onClick={()=>{history.push('/login')}} />
            </div>
        </div>
    )
}

export default Register
