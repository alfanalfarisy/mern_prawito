import React from 'react'
import { Button } from '../../atoms'
import './blogItem.scss'
import {useHistory} from 'react-router-dom';

const BlogItem = (props) => {
    const history = useHistory()
    const {image,title,name,date,body} = props;
    return (
        <div className="blog-item-wrapper">
            <img src={image} className="img-item" />
            <div className="detail-blog">
                <p className="title">{title}</p>
                <p className="author">{name}</p>
                <p className="article">{body}</p>
            </div>
            <Button title="View-Detail" onClick={()=>history.push('/')}/>
        </div>
    )
}

export default BlogItem
