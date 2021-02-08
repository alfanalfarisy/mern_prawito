import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'
import {useHistory} from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="email" placeholder="email"/>
                <Gap height={13}/>
                <Input label="password" placeholder="password"/>
                <Gap height={20}/>
                <Button title="GET" onClick={()=>history.push('/')}/>
                <Gap height={30}/>
                <Link title="Tidak punya akun? Silahkan daftar" onClick={()=>history.push('/register')}/>
            </div>
        </div>
    )
}

export default Register
