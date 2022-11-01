const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    year: {
        type: Number
    },
    category: {
        type: String
    },
    rating: {
        type: String
    },
    isBookmarked: {
        type: Boolean
    },
    isTrending: {
        type: Boolean
    },
    thumbnail: {
        type: Object
    }
}, {timestamps: true})

const Video = mongoose.model('videos', VideoSchema)

module.exports = Video