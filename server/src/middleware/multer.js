const multer = require('multer')

exports.fileStorage = multer.diskStorage({
    destination:(req, file, callback) =>{
        callback(null,'public/images')
    },
    filename: (req,file,callbacks) =>{
        callbacks(null, new Date().getTime()+ '-' + file.originalname)
    }
})

exports.fileFilter = (req,file,callbacks) =>{
    if( file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jepg')
    { callbacks(null,true) }
    else {callbacks(null,false)}
}