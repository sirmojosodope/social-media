const router = require('express').Router();

const {
    getUsers
    
} = require('../../Controllers/userController');

router.route('/').get(getUser).post(createUser);


module.exports = router;