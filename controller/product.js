const Product = require('../models').Product;

module.exports = {
    create(req, res) {
        const data = {
            code: req.body.code,
            name: req.body.name,
            price: req.body.price
        }

        Product.create(data)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },

    show(req, res) {
        Product.findAll().then(products => {
            res.status(200).json(products);
        })
            .catch(err => {
                res.status(500).json(err)
            })
    },

    getById(req, res) {
        const idProduct = req.params.id;
        return Product.findByPk(idProduct, {
            include: []
        })
            .then((product) => {
                if (!product) {
                    return res.status(404).json("Product tidak ditemukan")
                }
                return res.status(200).json(product)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    updateById(req, res) {
        Product.update({
            code: req.body.code,
            name: req.body.name,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.status(200).json("Produk berhasil di update")
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },

    deleteById(req, res) {
        const idProduct = req.params.id;
        Product.destroy({ where: { id: idProduct } })
            .then(() => {
                res.status(200).json("Product berhasil dihapus")
            })
            .catch((err) => {
                res.status(500).json(err)
            })

    }
}