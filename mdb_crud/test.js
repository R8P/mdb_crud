const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


Post.findByIdAndDelete('5e7ddadd9b62ba06f7d4ad83', (error, post) =>{
    console.log(error,post)
})

/* Post.findByIdAndUpdate('5e7ddadd9b62ba06f7d4ad83',{
    title: 'updated title',
    content: 'updated content'
},(error, post) => {
    console.log(error, post)
}) */
/* Post.findById('5e7ddadd9b62ba06f7d4ad83',(error, post) => {
    console.log(error, post)
}) */

// Post.find({
//     title: 'İkinci Post'
// },(error, post) =>{
//     console.log(error,post)
// }) 

/* Post.create({
    title: 'İkinci Post',
    content: 'Post içeriği'
}, (error, post) => {
    console.log(error, post)
}) */