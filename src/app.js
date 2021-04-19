const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./db/conn");
const port = process.env.PORT || 9000;
const router = require("./router/applicationrouting");

// STATIC PATH
const static_path = path.join(__dirname, "../public");
const viewtemplatepath = path.join(__dirname, "../templates/views");
const partialtemplatepath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", viewtemplatepath);
hbs.registerPartials(partialtemplatepath);
app.use(express.static(static_path));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTING
app.use(router);

app.listen(port, () => {
  console.log(`listening to port ${9000}`);
});
