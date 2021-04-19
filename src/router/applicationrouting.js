const express = require("express");
const router = new express.Router();
const userData = require("../models/userschema");
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/weather", (req, res) => {
  res.render("weather");
});
router.get("/notes", (req, res) => {
  res.render("yournotes");
});
router.get("/books", (req, res) => {
  res.render("bookslibrary");
});
router.get("/news", (req, res) => {
  res.render("news");
});
router.get("/bmc", (req, res) => {
  res.render("bmc");
});
router.get("/game", (req, res) => {
  res.render("game");
});
router.get("/contact", (req, res) => {
  res.render("contactus");
});
router.post("/contact", async (req, res) => {
  try {
    // console.log(req.body);
    const createdata = new userData({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      phone: req.body.phone,
      feedback: req.body.feedback,
    });
    const dataintodb = await createdata.save();
    res.render("index");
  } catch (error) {
    res.status(404).send(error);
  }
});
router.get("*", (req, res) => {
  res.render("error");
});
module.exports = router;
