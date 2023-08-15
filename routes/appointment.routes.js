const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { createAppointment, getAppointments } = require("../controllers/appointment.controller");

const router = Router();
router.use(validarJWT);

router.post("/", createAppointment);
router.get("/", getAppointments);

module.exports = router;