const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { createContact, getContacts } = require("../controllers/contact.controller");

const router = Router();
router.use(validarJWT);

router.post("/", createContact);
router.get("/", getContacts);

module.exports = router;