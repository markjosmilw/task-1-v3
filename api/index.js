require("dotenv").config()

const Koa = require('koa')
const app = new Koa()
const PORT = 8000;

const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');

const basicInfo = require("./routes/basicInfo");
const contactInfo = require("./routes/contactInfo");

app.use(cors())
app.use(bodyParser());
app.use(basicInfo.routes())
app.use(contactInfo.routes())

app.listen(PORT, () => {
  console.log(`api is listening to port ${PORT}`);
});

// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cors = require("cors");
// dotenv.config();
// const PORT = 8000;
// const basicInfo = require("./routes/basicInfo");
// const basicContact = require("./routes/basicContact");

// require("./database/db");

// app.use(cors())
// app.use(express.json());
// app.use("/api/info", basicInfo);
// app.use("/api/contact", basicContact);

// app.listen(PORT, () => {
//   console.log(`api is listening to port ${PORT}`);
// });
