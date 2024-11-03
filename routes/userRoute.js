const router = require('express').Router();

const UserController = require('../controllers/userController'); 
const authorize  = require('../middlewares/authorize');
const authenticate  = require('../middlewares/authenticate');

router.get('/', authenticate, authorize('superadmin', 'admin'), UserController.getAllUsers);
router.get('/:id', authenticate, authorize('superadmin', 'admin'), UserController.getUserbyId);
router.post('/', authenticate, authorize('superadmin', 'admin'), UserController.createUser);

module.exports = router;
