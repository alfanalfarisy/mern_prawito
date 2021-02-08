const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const multerConfig = require('./src/middleware/multer')
const path = require('path')


//routes
const productRoutes = require('./src/routes/products')
const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blog')

// Allow Origin Cors
app.use((req, res, next) => {
    //* all site, there is can just only 1. ex:https://codepen.com
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,FETCH,DELETE,UPDATE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
    next();
})

//middleware
app.use('/public/images',express.static(path.join(__dirname, '/public/images')))
app.use(bodyParser.json()) //JSON type
app.use(multer({storage : multerConfig.fileStorage, fileFilter : multerConfig.fileFilter}).single('image'))

//Routing
app.use('/',productRoutes)
app.use('/v1/auth',authRoutes)
app.use('/v1/blog',blogRoutes)

app.use((error,req,res,next) =>{
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message,data:data})
})

mongoose.connect('mongodb+srv://projek20:projek20@cluster0.t80et.mongodb.net/mern?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(4000)
    console.log('Conn Succ')
}).catch(err=>console.log(err))

