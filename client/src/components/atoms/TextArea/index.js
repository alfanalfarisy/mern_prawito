import React from 'react'
import './textArea.scss'

const TextArea = ({...rest}) => {
    return (
        <div >
            <textarea className="textArea" {...rest}>
                
            </textarea>
        </div>
    )
}

export default TextArea
