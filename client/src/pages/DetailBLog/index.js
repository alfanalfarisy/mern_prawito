import React from 'react'
import { LoginBg } from '../../assets'
import { Button } from '../../components'
import './detailBlog.scss'
import {useHistory} from 'react-router-dom';

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img className="blog-cover" src={LoginBg}/>
            <p className="blog-title">Title</p>
            <p className="blog-author">Author</p>
            <p className="blog-body">Artikel adalah karangan faktual secara lengkap dengan panjang tertentu yang dibuat untuk dipublikasikan di media online maupun cetak (melalui koran, majalah, buletin, dsb) dan bertujuan menyampaikan gagasan dan fakta yang dapat meyakinkan, mendidik, dan menghibur.</p>
            <Button titile="Home" onClick={history.push('/')}/>
  
        </div>
        
    )
}

export default DetailBlog
