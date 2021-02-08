const express = require('express')
const router = express.Router()
const blogControllers = require('../controllers/blog')
const {body} = require('express-validator')


//[POST] : /v1/blog/post
router.post('/post',
[
    body('title').isLength({min:5}).withMessage('Input tidak sesuai format'),
    body('body').isLength({min:5}),
],blogControllers.createBlogPost)

router.get('/posts',blogControllers.getAllBlogPosts)
router.get('/post/:postId',blogControllers.getAllBlogPostById)
router.put('/post/:postId',blogControllers.updateBlogPostById)
router.delete('/post/:postId',blogControllers.deleteBlogPostById)


module.exports = router;

