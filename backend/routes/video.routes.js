const VideoController = require('../controllers/video.controllers')

module.exports = (app) => {
    app.get('/api/videos', VideoController.allVideos)
    app.post('/api/videos/bookmark', VideoController.bookmark)
}