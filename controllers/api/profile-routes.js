const router = require('express').Router();
const { User } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
  try {
    const profileData = await User.create(req.body);
    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put
// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {
    const profileData = await User.destroy({
      where: { id: req.params.id }
    });
    if (!userData) {
      res.status(404).json({ message: 'Not found!' });
      return;
    }
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
