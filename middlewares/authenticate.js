const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "You're not authorized",
      isSuccess: false,
      data: null,
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    const user = await User.findByPk(payload.id);
    // console.log(user);

    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "User not found. You're not authorized",
        isSuccess: false,
        data: null,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "failed",
      message: error.message || "Invalid token",
      isSuccess: false,
      data: null,
    });
  }
};

module.exports = authenticateToken;
