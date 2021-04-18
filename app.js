const express = require('express');
const cors = require('cors');
const app = express();
const productsList = require('./routes/products');

app.use(cors());

app.use('/products', productsList);
// app.get('/', (req, res) => {
//     res.status(200).send('Home Page');
// });
// app.get('/products', (req, res) => {
//     res.status(200).send("This is the product page");
// });
// app.get('/about', (req, res) => {
//     res.status(200).send('This is the about page');
// });
// app.get('/contact', (req, res) => {
//     res.status(200).send('This is the contact page');
// });
app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
