const Product = require('../models/product')


//OBTENER INFORMACION DE LOS PRODUCTOS
const getProducts = async (req, res) => {

    const products = await Product.find()
    res.status(200).json({ok: true, pepito: products, count: products.length })
}

//CREAR PRODUCTOS
const createProduct = (req, res) => {
        if(!req.body.name){
            res.status(400).json({
                ok: false, 
                message: 'El campo nombre del producto es obligatorio',
            })
            return
        }
        const newProduct = new Product(req.body)
    
        newProduct
        .save()
        .then((result) => {
            res.status(201).json({ ok: true })
        })
        .catch((err) => console.log(err))
    }

module.exports = {
    getProducts,
    createProduct,
}