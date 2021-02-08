import React from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import './createBlog.scss';
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div>
            <p>Create New Blog Post</p>
            <Input label="Post Title"/>
            <p>Upload Image</p>
            <Upload/>
            <Gap height={16}/>
            <TextArea/>
            <Gap height={16}/>
            <div class="btn-action">
                <Button title="Save"/>
                <Gap width={16}/>
                <Button title="Cancel" onClick={()=>history.push('/')}/>
            </div>
                <Gap height={25}/>
        </div>
    )
}

export default CreateBlog
