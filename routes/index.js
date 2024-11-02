const router = require("express").Router();

const { SystemController } = require("../controllers/SystemController");

const Auth = require("./authRoute");
const User = require("./userRoute");
const Car = require("./carRoute");
const Docs = require("./documentationRouter");

router.use("/api/v1/auth", Auth);
router.use("/api/v1/users", User);
router.use("/api/v1/cars", Car);

router.use("/api-docs", Docs);

router.use("/api/v1/health-check", SystemController.healtcheck);
router.use(SystemController.onLost);
router.use(SystemController.onError);

module.exports = router;
