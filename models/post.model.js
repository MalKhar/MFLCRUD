const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Please enter post title"]
        },         
        category:{
            type: String,
            required: [true, "Please enter post category"],
            default: 0,
        },
        content:{
            type: String,
            required: true
        },
     },
     {
        timestamps: true,
     }

);


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;