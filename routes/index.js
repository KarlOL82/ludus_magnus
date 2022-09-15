app.post('/user', (req, res) => {
    const { body } = req;
  
    if (!body.username || !body.password || !body['confirm-password']) {
      req.flash('error', 'All fields are required!');
      return res.redirect('/signup');
    }
  
    if (body.password !== body['confirm-password']) {
      req.flash('error', 'Password did not match confirmation!');
      return res.redirect('/signup');
    }
  
    delete body['confirm-password'];
  
    User
      .forge(req.body)
      .save()
      .then((usr) => {
        res.send({id: usr.id});
      })
      .catch((error) => {
        console.error(error);
        return res.sendStatus(500);
      });
  });