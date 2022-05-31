const { User, Thoughts, thought } = require("../Models");

module.exports = {
  getThoughts(req, res) {
    Thoughts.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Get
  getSingleThoughts(req, res) {
    Thoughts.findOne({ _id: req.params.id })
      .select("-__v")
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "Not found" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //Update
  updateThoughts(req, res) {
    Thoughts.findOneandUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((Thoughts) =>
        !thought ? res.status(404).json() : res.json(Thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Delete
  deleteThoughts(req,res) {
    Thoughts.findOneAndDelete({ _id: req.params.id})
    .then((Thoughts) =>
    !Thoughts
        ?res.status(404).json()
        : User.deleteMany({ _id: { $in: Thoughts.username} }))
},
};
