const express = require('express');
const cors = require('cors');
const app = express();
const routerAPI = require('./routes/router');

app.use(cors());
app.use('/api', routerAPI);

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
