const Blog = require('../models/blog.model');

module.exports = {

    createBlog: (req, res) => {
        Blog.create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getAllBlogs: (req, res) => {
        Blog.find({}) 
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getOneBlog: (req, res) => {
        Blog.findOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },

    deleteBlog: (req, res) => {
        Blog.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },
}