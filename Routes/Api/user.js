const router = require('express').Router();

const {
    
} = require('../../Controllers/userController');

router.route('/').get(getUser).post(createUser);
