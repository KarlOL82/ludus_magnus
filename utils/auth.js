const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

const withAuthAPI = (req, res, next) => {
  if (!req.session.user_id) {
    res.status(403).json({ message: "oops" });
  } else {
    next();
  }
};

module.exports = {withAuth, withAuthAPI};



