const express = require('express');
const { connectToDB } = require('./Config/db');
const router = require('./routes/routes');
const bodyParser=require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

connectToDB();

app.use('/api/v3/app/events', router);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});