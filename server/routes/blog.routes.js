const BlogController = require('../controllers/blog.controller');
const EventController = require('../controllers/event.controller');

module.exports = (app) => {
    
    //Create
    app.post("/api/blogs", BlogController.createBlog)

    //Read
    app.get("/api/blogs/:id", BlogController.getOneBlog);
    app.get("/api/blogs/", BlogController.getAllBlogs);

    //Delete 
    app.delete("/api/blogs/:id", BlogController.deleteBlog)


    // Event 
    app.post("/api/event", EventController.createEvent)

    //Read
    app.get("/api/event/:id", EventController.getOneEvent);
    app.get("/api/event/", EventController.getAllEvents);

    //Delete 
    app.delete("/api/event/:id", EventController.deleteEvent)

}