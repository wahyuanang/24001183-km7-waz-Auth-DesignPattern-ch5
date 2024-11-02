const authorize = (...roles) => {
  return (res, req, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "Failed",
        message: "message danied for this user",
        isSuccess: false,
        data: null,
      });
    }
    next();
  };
};

module.exports = authorize;
