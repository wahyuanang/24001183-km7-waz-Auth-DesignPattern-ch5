const authorize = (...roles) => {
  return (req, res, next) => {

    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "Failed",
        message: "Access denied for this user",
        isSuccess: false,
        data: null,
      });
    }
    next();
  };
};

module.exports = authorize;
