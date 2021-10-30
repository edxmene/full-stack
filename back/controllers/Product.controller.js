const productModel = require("../models/Producto.model");

module.exports = class ProductAPI {
    static async getAll(req, res){
        try {
            const products = await productModel.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }

    static async getByCode(req, res){
        const code = req.params.code;
        try {
            const product = await productModel.findOne({"code":code});
            if(product == null){
                res.status(404).json({message: `Producto ${code} no encontrado`});
            }else{
                res.status(200).json(product);
            }
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }

    static async create(req, res){
        try {
            let product = req.body;
            product = await productModel.create(product);
            res.status(201).json(product);
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }

    static async update(req, res){
        const code = req.params.code;
        let product = req.body;
        try {
            product = await productModel.updateOne({"code":code}, product);
            res.status(200).json(product);
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }

    static async delete(req, res){
        const code = req.params.code;
        try {
            product = await productModel.deleteOne({"code":code});
            res.status(200).json(product);
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }
}