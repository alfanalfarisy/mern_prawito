import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'
const Upload = () => {
    return (
        <div className="upload">
            <img className="img-preview" src={LoginBg} alt="preview"/>
            <input type="file"/>
        </div>
    )
}

export default Upload
