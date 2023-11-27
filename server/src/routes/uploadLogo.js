const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "logos/");
    },
    filename: function (req, file, callback) {
        callback(
            null,
            file.originalname + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage });

// Rota para lidar com o upload da logo
router.post("/", upload.single("logo"), (req, res) => {
    try {
        const logoUrl = `../logos/${req.file.filename}`;
        res.json({ url: logoUrl });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer o upload da logo' });
    }
});

module.exports = router;
