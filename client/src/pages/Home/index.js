import React, {useEffect, useState} from 'react'
import { BlogItem, Gap, Button } from '../../components'
import './home.scss'
import {useHistory} from 'react-router-dom';
import Axios from 'axios'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then((result) =>{
            console.log(result)
            const responsApi = result.data
            setDataBlog(responsApi.data)

        })
        .catch((error) =>console.log(error))
    },[])
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="btn-create-blog">
                <Button title="Create Blog" onClick={()=>history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
            
            {dataBlog.map((blog)=>{
                return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} name={blog.name} body={blog.body}/>

            })}
            </div>
            <div className="pagination">
                <Button title="previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home
