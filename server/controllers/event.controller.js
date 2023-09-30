const Event = require('../models/event.model');

module.exports = {

    createEvent: (req, res) => {
        Event.create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getAllEvents: (req, res) => {
        Event.find({}) 
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getOneEvent: (req, res) => {
        Event.findOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },

    deleteEvent: (req, res) => {
        Event.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },
}