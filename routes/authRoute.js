const router = require("express").Router();

// Jika path sebelumnya salah, sesuaikan seperti ini:
const AuthController = require("../controllers/authController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
