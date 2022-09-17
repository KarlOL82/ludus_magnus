const router = require('express').Router();
const { Forum } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
  try {
    const newUserData = await Forum.create(req.body);
    res.status(200).json(newUserData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {
    const newUserData = await Forum.destroy({
      where: { id: req.params.id }
    });
    if (!newUserData) {
      res.status(404).json({ message: 'Not found!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
