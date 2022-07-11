const express = require('express');
const { change_status, get_ticket_by_status, schematicket } = require('../controller/doubtController');

const router = express.Router();

const userController = require("../controller/userController");
const { protect } = require('../middlewares/authchecker');

router.post("/login", userController.userLogin);
router.post("/createlocal", userController.userCreate);
// router.get("/tickets",protect, userController.getTickets);
// router.post('/change', protect, change_status);
// router.post('/getts', protect, get_ticket_by_status);
// router.get("/ticketschema",protect,  schematicket)
// router.get("/superdashboard",protect,  userController.superdashboard)
module.exports = router;

