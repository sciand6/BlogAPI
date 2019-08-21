const mongoose = require('mongoose');

// Book schema
var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    postDate: {
        type: String
    }
});

var Post = module.exports = mongoose.model('Post', postSchema);

// Add Post
module.exports.addPost = (post, callback) => {
	Post.create(post, callback);
}

// Get Posts
module.exports.getPosts = (callback, limit) => {
    Post.find(callback).limit(limit);
}

// Get post by ID
module.exports.getPostByID = (id, callback) => {
    Post.findById(id, callback);
}

// Get post by ID
module.exports.deletePostByID = (id, callback) => {
    Post.remove( {"_id": new mongoose.Types.ObjectId(id)}, callback);
}

