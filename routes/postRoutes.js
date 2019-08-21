const Posts = require('../models/post');

var appRouter = (app) => {
    
    app.get('/posts', (req, res) => {
        Posts.getPosts((err, posts) => {
            if (err) {
                res.json( {error: "Could not fetch posts."} );
            }
            res.json(posts);
        });
    });
    
    app.post('/posts', (req, res) => {
        var post = req.body;
        console.log(post);
        Posts.addPost(post, (err, post) => {
            if(err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    app.delete('/posts/:_id', (req, res) => {
        var id = req.params._id;
        Posts.deletePostByID(id, (err, post) => {
            if(err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    app.put('/posts/:_id', (req, res) => {
        var id = req.params._id;
        
        var post = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            postDate: req.body.postDate
        }

        Posts.findByIdAndUpdate(id, {$set: post}, (err, doc) => {
            if (!err)
                res.send(doc)
            else
                console.log("Error in post update " + JSON.stringify(err, undefined, 2))
        });
    });
}

module.exports = appRouter;