const router = require('express').Router();

const {
    getAllThoughts,
    getThought,
    createThought,
    deleteThought
} = require('../../controllers/thoughtController');

router
    .route('')
    .get(getAllThoughts)
    .get(getThought)
    .put(createThought)
    .delete(deleteThought);

module.exports = router;
