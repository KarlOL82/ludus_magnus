const router = require('express').Router();
const { GameChat, User } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const chatData = await GameChat.findAll();
    res.status(200).json(chatData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const chatData = await GameChat.findByPk(req.params.id, {
      
      include: User
    });

    if (!chatData) {
      res.status(404).json({ message: 'Conversation not found!' });
      return;
    }

    res.status(200).json(chatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a location

router.post('/', async (req, res) => {
  try {
    const chatData = await GameChat.create(req.body);
    res.status(200).json(chatData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  try {
    const chatData = await GameChat.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!chatData) {
      res.status(404).json({ message: 'Chat not found!' });
      return;
    }

    res.status(200).json(chatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
