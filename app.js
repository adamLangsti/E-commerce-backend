const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./middleware');
const home = require('./routes/home');
const categoryList = require('./routes/products');
const laptops = require('./routes/laptops');
const apple = require('./routes/apple');

app.use(middleware);
app.use(cors());
app.use('/', home);
app.use('/categories', categoryList);
app.use('/laptops', laptops);
app.use('/apple', apple);

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
