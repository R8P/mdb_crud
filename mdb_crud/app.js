const path = require('path')
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const generateDate = require('./helpers/generateDate').generateDate


mongoose.connect('mongodb://127.0.0.1/mcrud_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
app.use(fileUpload())
app.use(express.static('public'))


app.engine('handlebars', exphbs({helpers:{generateDate:generateDate}}))
app.set('view engine', 'handlebars')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const posts = require('./routes/posts')
const users = require('./routes/users')
app.use('/',main)
app.use('/posts', posts)
app.use('/users', users)


app.listen(port, hostname, () => {
    console.log(`Server çalışıyor, http://${hostname}:${port}/`)
})