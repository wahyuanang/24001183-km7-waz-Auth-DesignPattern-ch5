
const router = require("express").Router();

const { SystemController } = require("../controllers/api/v1");

router.use("/api/v1/health-check", SystemController.healtcheck)
router.use(SystemController.onLost);
router.use(SystemController.onError);

module.exports = router;    