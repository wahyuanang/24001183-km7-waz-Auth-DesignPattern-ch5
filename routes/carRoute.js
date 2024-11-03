const router = require("express").Router();

const CarController = require("../controllers/carController");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");


router.get('/cars', authenticate, CarController.getAllCars);
router.get("/:id", authenticate, CarController.getCarbyId);
// router.post("/", authenticate, authorize('superadmin', 'admin'), uploader.single("fotoMobil"), CarController.createCar);
// router.patch("/:id", authenticate, authorize('superadmin', 'admin'), uploader.single("fotoMobil"), CarController.updateCar);
router.delete("/:id", authenticate, authorize('superadmin', 'admin'), CarController.deleteCar);

module.exports = router;