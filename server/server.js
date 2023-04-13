const express = require('express');
const app = express();
const cors = require('cors');

const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

require('./config/mongoose.config');
require('./routes/blog.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));