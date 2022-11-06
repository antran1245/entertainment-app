const UserController = require('../controllers/user.controllers')

module.exports = (app) => {
    app.post('/api/register', UserController.register)
    app.get('/api/login', UserController.login)
}