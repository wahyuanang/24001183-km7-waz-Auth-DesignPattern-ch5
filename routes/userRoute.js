const router = require('express').Router();
const UserController = require('../controllers/userController'); 
const { authenticated, authorize } = require('../middlewares');

router.get('/', authenticated, authorize('superadmin', 'admin'), UserController.getAllUsers);
router.get('/:id', authenticated, authorize('superadmin', 'admin'), UserController.getUserById);
router.post('/', authenticated, authorize('superadmin', 'admin'), UserController.createUser);

module.exports = router;
