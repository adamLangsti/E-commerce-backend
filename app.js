const express = require('express');
const cors = require('cors');
const app = express();
const middleware = require('./middleware');
const categoryList = require('./routes/products');
const subProducts = require('./routes/subProducts');
const home = require('./routes/home');

app.use(middleware);
app.use(cors());
app.use('/categories', categoryList);
app.use('/sub-categories', subProducts);
app.use('/', home);

// app.get('/', (req, res) => {
//     if (res.status === 400 || res.status === 401) {
//         res.status(400).send('Page not found');
//     }
//     res.status(200).send('Home Page');
// });

// app.get('/contact', (req, res) => {
//     res.status(200).send('Contact Page');
// });

// app.get('/about', (req, res) => {
//     res.status(200).send('About Page');
// });

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
