const express = require('express');
const app = express();
const port = 3000;
const { User } = require('./models');
const { Product } = require('./models');
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
}
const indexRouter = require('./routes/index');
app.use(logger);
app.use(express.json()) //untuk melakukan parsing app/json
app.use(express.urlencoded({ extended: false })); //untuk parsing x-www-urlencoded

app.use('/', indexRouter);

// app.get('/api/users', (req, res) => {
//     User.findAll().then(users => {
//         res.status(200).json(users);
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })

// app.post('/api/register', (req, res) => {
//     const data = {
//         name: req.body.name,
//         email: req.body.email,
//         gender: req.body.gender
//     }
//     User.create(data)
//     .then(data => {
//         res.status(201).json(data)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })


// //route products


// app.get('/api/products', (req, res) => {
//     Product.findAll().then(products => {
//         res.status(200).json(products)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }) //route menampilkan seluruh produk

// app.post('/api/product/create', (req, res) => {
//     const data = {
//         code: req.body.code,
//         name: req.body.name,
//         price: req.body.price,
//         status: req.body.status
//     }
//     Product.create(data)
//     .then(data => {
//         res.status(201).json(data)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     }) 
// }) //route untuk menambahkan produk

// app.get('/api/product/:id', (req, res) => {
//     Product.findOne({
//         where: { id: req.params.id }
//     })
//     .then(product => {
//         res.status(200).json(product)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }) //route untuk menampilkan detail 1 produk

// app.put('/api/product/:id', (req, res) => {
//     const data = {
//         code: req.body.code,
//         name: req.body.name,
//         price: req.body.price,
//         status: req.body.status
//     }
//     Product.update(data, { where: { id: req.params.id }})
//     .then(() =>{
//         res.status(200).json('Product Updated')
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }) // route untuk update data produk

// app.delete('/api/product/:id', (req, res) => {
//     Product.destroy({
//         where: { id: req.params.id }
//     })
//     .then(() => {
//         res.status(200).json('Product deleted')
//     })
//     .catch(err => {
//         res.status(500).json('Cant delete product', err)
//     })
// }) //route untuk delete produk







app.listen(port, () => console.log(`CRUD Challenge listening at http://localhost:${port}`));