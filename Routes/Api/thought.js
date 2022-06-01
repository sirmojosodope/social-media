const router = require("express").Router();

const {
  getSingleThoughts,
  getThoughts,
  createThoughts,
  deleteThoughts,
} = require("../../controllers/thoughtController");

router
  .route("/")
  .get(getThoughts)
  .put(createThoughts)

  router.route ("/:thoughtId")
  .get(getSingleThoughts)
  
  .delete(deleteThoughts);

module.exports = router;
