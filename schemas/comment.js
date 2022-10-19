const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    header: String,
    content: String,
});

module.exports = mongoose.model('Comment', commentSchema)