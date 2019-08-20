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
}

module.exports = appRouter;