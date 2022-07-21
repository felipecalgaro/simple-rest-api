require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', () => console.log('conected to db'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('server started'))