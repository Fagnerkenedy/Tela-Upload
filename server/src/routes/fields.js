const express = require("express");
const router = express.Router();

controllerfields = require("../controllers/fields");

router.post("/create", controllerfields.create);
router.get("/read", controllerfields.read);
router.put("/update/:id", controllerfields.update);
router.delete("/delete/:id", controllerfields.delete);

module.exports = router;