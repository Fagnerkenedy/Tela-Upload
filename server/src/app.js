require("dotenv/config");

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

//MIDDLEWARES
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(express.json());

//routes
app.use("/uploadLogo", require("./routes/uploadLogo"));

app.use("/fields", require("./routes/fields"));

app.use("/upload", require("./routes/upload"));

app.use("/processing", require("./routes/processing"));

app.use("/downloadModel", require("./routes/downloadModel"));

//execução do server
app.listen(process.env.EXPRESS_PORT, () => {
  console.log("server up on " + process.env.EXPRESS_PORT);
});
