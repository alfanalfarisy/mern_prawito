exports.createProduct = (req,res,next)=>{
    const name = req.body.name; 
    const price = req.body.price;
    console.log(name)
    res.json({
        message : 'Create product success',
        data : {
            id : '1',
            name : name,
            price : price
        }
    });
    next();
}

exports.getAllProduct=(req,res,next) => {
    res.json({
        message : 'Get all products success',
        data : [{
            id : '1',
            name : 'salak buah',
            price : '10000'
        }]
    })

}
