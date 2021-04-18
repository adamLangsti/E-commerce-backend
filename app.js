const express = require('express');
const cors = require('cors');
const app = express();
const middleware = require('./middleware');
const categoryList = require('./routes/products');
const subProducts = require('./routes/subProducts');

app.use(middleware);
app.use(cors());
app.use('/categories', categoryList);
app.use('/sub-categories', subProducts);
app.get('/', (req, res) => {
    if (res.status === 400 || res.status === 401) {
        res.status(400).send('Page not found');
    }
    res.status(200).send('Home Page');
});
// app.get('/sub-categories', (req, res) => {
//     res.status(200).send('Sub page');
// });

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
