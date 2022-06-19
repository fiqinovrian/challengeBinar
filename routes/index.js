const express = require('express');
const router = express.Router();

const userController = require('../controller').user;
const productController = require('../controller').product;
const orderController = require('../controller').order;

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(function timeLog(req, res, next) {
    console.log(`Time: `, Date.now())
    next()
});

//routing untuk users
router.post('/api/v1/user/create', userController.create);
router.get('/api/v1/users', userController.show);
router.get('/api/v1/user/:id', userController.getById);
router.delete('/api/v1/user/:id', userController.deleteById);
router.put('/api/v1/user/:id', userController.updateById);
router.post('/api/v1/user/login', userController.loginUser);

//routing untuk produk
router.post('/api/v1/product/create', productController.create);
router.get('/api/v1/products', productController.show);
router.get('/api/v1/product/:id', productController.getById);
router.delete('/api/v1/product/:id', productController.deleteById);
router.put('/api/v1/product/:id', productController.updateById);

//routing untuk order
router.post('/api/v1/order/create', orderController.create);
router.get('/api/v1/orders', orderController.show);
router.get('/api/v1/order/:id', orderController.getById);
router.delete('/api/v1/order/:id', orderController.deleteById);
router.put('/api/v1/order/:id', orderController.updateById);
router.get('/api/v1/order/user/:id', orderController.countOrdersByUserId); //menghitung total order dari user
// router.post('/api/register', (req, res) => {
//     const data = {
//         name: req.body.name,
//         email: req.body.email,
//         gender: req.body.gender
//     }
//     User.create(data)
//     .then(user => {
//         res.status(201).json(user)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })



// router.get('/api/v1/users', (req, res) => {
//     User.findAll().then(users => console.log(users))
// })

module.exports = router;