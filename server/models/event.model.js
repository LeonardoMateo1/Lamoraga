const {mongoose, Schema} = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema)