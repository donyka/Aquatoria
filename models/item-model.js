'use strict'

const mongoose = require('mongoose');

var requiredMessage = '{PATH} is required';
const roles = ['photo', 'song', 'videoLink'];

let itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: requiredMessage
    },
    body: {
        type: String
    },
    type: {
        type: String,
        enum: roles
    },
    //TODO: think how the categories must be
    category: {
        type: String,
        default: 'no category'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    description: {
        type: String
    },
    //TODO: maybe -> link to creator
    madeBy: {
        fullName: {
            type: String
        }
    },
    isDeleted: {
       type: Boolean,
        default: false
    }
});

mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Item');