const router = require("express").Router();

const SystemController = require("../controllers/SystemController");

const Auth = require("./authRoute");
const User = require("./userRoute");
const Car = require("./carRoute");
const Docs = require("./documentationRoute");

router.use("/auth", Auth);
router.use("/users", User);
router.use("/cars", Car);

router.use("/api-docs", Docs);

router.use("/health-check", SystemController.healthcheck);
router.use(SystemController.onLost);
router.use(SystemController.onError);

module.exports = router;
