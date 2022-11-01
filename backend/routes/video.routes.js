const VideoController = require('../controllers/video.controllers')

module.exports = (app) => {
    app.get('/api/videos', VideoController.allVideos)
}