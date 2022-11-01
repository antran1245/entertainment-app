const Video = require('../models/video.models')

module.exports.allVideos = (req, res) => {
    Video.find()
    .then(videos => res.json(videos))
    .catch(err => res.json(err))
}