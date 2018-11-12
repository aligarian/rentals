const express = require('express');
const mongoose = require('mongoose');
const devconfig = require('./config/dev.js');
const app = express();
const FakeDb= require('./models/fake-db.js');

const rentalRouter = require('./rentals');


mongoose.connect(devconfig.DB_URI).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seedDb()

});


app.use('/api/v1/rentals', rentalRouter);


const PORT = process.env.port || 3001;

app.listen(PORT,function(){
    console.log('Server is running on PORT'+PORT);
})