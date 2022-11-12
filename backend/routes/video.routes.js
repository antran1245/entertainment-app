const VideoController = require('../controllers/video.controllers')

module.exports = (app) => {
    app.get('/api/videos', VideoController.allVideos)
    app.get('/api/videos/bookmark/:_id', VideoController.allBookmark)
    app.post('/api/videos/bookmark', VideoController.bookmark)
}