const {validationResult} = require('express-validator')
const BlogPost = require('../models/blog')
const path = require('path')
const fs = require('fs')
const { remove, count } = require('../models/blog')

exports.createBlogPost = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('invalid Value')
        err.errorStatus = 400;
        err.data=errors.array();
        throw err;
    }
    if(!req.file){    
        const err = new Error('File must be uploaded')
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title
    const image = req.file.path;
    const body = req.body.body;

    const Posting = new BlogPost({
        title : title,
        body : body,
        image : image,
        author : {
            uid : 1,
            name : "alfanalfarisy",

        }
    })
    Posting.save()
    .then((result)=>{
        
        res.status(201).json({
            message : 'Success Created',
            data : result
        })

    }).catch(err=>console.log(err))
   
}

exports.getAllBlogPosts = (req, res,next)=>{
    // console.log('err')
    const currentPage = req.query.currentPage || 1;
    const perPage = req.query.perPage  || 5;
    let totalItem;
    BlogPost.countDocuments()
    .then(count =>{
        totalItem = count
        return BlogPost.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage))
    })
    .then(result =>{
        res.status(200).json({
            message : 'All Blog Posts Success Getted',
            data : result,
            total_item : totalItem,
            curent_page : currentPage,
            per_page : perPage
        })
    })
    .catch(err=>console.log(err))
    // BlogPost.find()
    // .then(result=>{
    //     res.status(200).json({
    //         message : 'All Blog Posts Success Getted',
    //         data : result
    //     })
    // })
    // .catch(err=>console.log(err))
}
exports.getAllBlogPostById = (req, res,next)=>{
    postId = req.params.postId 
    BlogPost.findById(postId)
     .then(result=>{
         if(!result){
            const error = new Error('Data tidak ditemukan')
            err.errorStatus = 404
            throw err     
        }
        res.status(200).json({
            message : 'All Blog Posts Success Getted',
            data : result
        })
     })
     .catch(err=>console.log(err))
}

exports.updateBlogPostById = (req, res,next)=>{
   
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('invalid Value')
        err.errorStatus = 400;
        err.data=errors.array();
        throw err;
    }
    if(!req.file){    
        const err = new Error('File must be uploaded')
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title
    const image = req.file.path;
    const body = req.body.body;

    postId = req.params.postId 
    BlogPost.findById(postId)
     .then(post=>{
         if(!post){
            const error = new Error('Blog tidak ditemukan')
            err.errorStatus = 404
            throw err     
        }

        post.title = title;
        post.body = body;
        post.image = image;
        return post.save()

     })
     .then(result => {
         res.status(200).json({
             message: 'updated',
             data : result
         })
     })
     .catch(err=>console.log(err))

}

exports.deleteBlogPostById= (req, res,next)=>{
    postId = req.params.postId
    BlogPost.findById(postId)
    .then(post => {
        if(!post){
            const error = new Error('Blog tidak ditemukan')
            err.errorStatus = 404
            throw err
        }
        removeImage(post.image)
        BlogPost.findByIdAndRemove(postId)
    })
    .then(result => {
        res.status(200).json({
            message: 'Data Berhasil di Remove',
            data : {}
        })
    })
    .catch(err=>console.log(err))
}

removeImage = (filepathImg)=>{
    const filepath = path.join(__dirname,'../..',filepathImg)
    fs.unlink(filepath, err => {console.log(err)})
}