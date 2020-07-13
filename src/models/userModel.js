const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    myCollection: [
        {
            id: {
                type: Number,
            },
            title: {
                type: String,
            },
            pages: {
                type: Number,
            },
            created_at: {
                type: Date,
                default: Date.now
            },
        }
    ],
    lent_books: [
        {
            book_id: {
                type: Number,
            },
            from_user: {
                type: Number,
            },
            to_user: {
                type: Number,
            },
            lent_at: {
                type: Date,
            },
            returned_at: {
                type: Date,
            },
        }
    ],
    borrowed_books: [
        {
            book_id: {
                type: Number,
            },
            from_user: {
                type: Number,
            },
            to_user: {
                type: Number,
            },
            lent_at: {
                type: Date,
            },
            returned_at: {
                type: Date,
            },
        }
    ]
  }, {collection: 'user', versionKey: false});

  const userModel = mongoose.model('user', userSchema, 'user')

  module.exports = userModel