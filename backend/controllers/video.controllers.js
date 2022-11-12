const Video = require('../models/video.models')
const User = require('../models/user.models')

module.exports.allVideos = (req, res) => {
    Video.find()
    .then(videos => res.json(videos))
    .catch(err => res.json(err))
}

module.exports.bookmark = (req, res) => {
    console.log(req.body)
    const { videoID, userID } = req.body
    User.findOneAndUpdate(
        {_id: userID},
        {$push: {bookmark: videoID} },
        {new: true}
    )
    .catch(err => res.json(err))
}