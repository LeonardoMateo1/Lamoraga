const BlogController = require('../controllers/blog.controller');

module.exports = (app) => {
    
    //Create
    app.post("/api/blogs", BlogController.createBlog)

    //Read
    app.get("/api/blogs/:id", BlogController.getOneBlog);
    app.get("/api/blogs/", BlogController.getAllBlogs);

    //Delete 
    app.delete("/api/blogs/:id", BlogController.deleteBlog)
}