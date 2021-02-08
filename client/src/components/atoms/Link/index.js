import React from 'react'
import './link.scss'

const Link = ({onClick,title}) => {
    return (
            <p className="link" onClick={onClick}>{title}</p>
    )
}

export default Link
