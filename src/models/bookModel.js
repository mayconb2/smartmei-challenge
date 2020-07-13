const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        required: true,
    },
    ownerId: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
}, {collection: 'book', versionKey: false});

const bookModel = mongoose.model('book', bookSchema, 'book')

module.exports = bookModel
