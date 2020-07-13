require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const APP_PORT = process.env.APP_PORT;
const dbName = process.env.DB_NAME;
const mongoUser = process.env.DB_USER;
const mongoPassword = process.env.DB_PW;    

const userRouter = require('./routes/userRoutes.js');

app.use(express.json());
app.use('/user', userRouter);


(async () => {
    try {
        console.log('Starting connection...')
        await mongoose.connect(
            `mongodb+srv://${mongoUser}:${mongoPassword}@igti-bootcamp-model-4.hpr7d.mongodb.net/${dbName}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
        console.log('Database connected')
    } catch (error) {
        console.log(`Error to connect on Database: ${error}`)
    }
})()

app.listen(APP_PORT, () => {
    console.log(`Application started on port ${APP_PORT}`)
});
