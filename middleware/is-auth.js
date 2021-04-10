module.exports = (req, res, next) => {
  if (req.session.isAuth) {
    console.log("iam from auth middleware  " + req.session.isAuth);
    next();
  } else {
    req.session.error = "You have to Login first";
    // console.log(req.session.isAuth)
    res.redirect("/login");
  }
};
