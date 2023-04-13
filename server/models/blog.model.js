const {mongoose, Schema} = require('mongoose');

const BlogSchema = new mongoose.Schema({
    mainHeader: {
        type: String,
    },
    mainContent: {
        type: String,
    },
    subHeader1: {
        type: String,
    },
    subContent1: {
        type: String,
    },
    subHeader2: {
        type: String,
    },
    subContent2: {
        type: String,
    },
    subHeader3: {
        type: String,
    },
    subContent3: {
        type: String,
    },
    subHeader4: {
        type: String,
    },
    subContent4: {
        type: String,
    },
    subHeader5: {
        type: String,
    },
    subContent5: {
        type: String,
    },
    subHeader6: {
        type: String,
    },
    subContent6: {
        type: String,
    },
    image: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model("Blog", BlogSchema)