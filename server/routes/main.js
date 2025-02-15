const express = require('express');

const Post = require('../models/post');
const router = express.Router();








router.get('', async (req, res) => {
 

    try {
        const locals = {
            title: "NodeJS Blog",
            description: "Simple Blog created with NodeJS, Express & MongoDB."
        }


        let perPage = 10;
        let page = req.query.page || 1;
        const data = await Post.aggregate([{ $sort:{createdAt:-1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

        const count = await Post.count;
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);















        res.render('index', {locals, data, current: page,nextPage: hasNextPage?nextPage: null});

    } catch (error) {
        console.log(error);
    }


});







// function insertPostData () {
//     Post.insertMany([{
//         title: "Building a Blog",
//         body: "This is the body text"
//     }])
//     Post.insertMany([{
//         title: "Building a Blog",
//         body: "This is the body text"
//     }])
//     Post.insertMany([{
//         title: "Building a Blog",
//         body: "This is the body text"
//     }])
// }






// insertPostData();













router.get('/about', (req, res) => {
    res.render('about');
})


module.exports = router;

