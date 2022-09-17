const withAuth = (req, res, next) => {

  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

const withAuthAPI = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(403).json({ message: "oops" });
  } else {
    next();
  }
};

module.exports = {withAuth, withAuthAPI};



