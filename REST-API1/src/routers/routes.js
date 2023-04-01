const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/mens");

//Post Request
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MenRanking(req.body);
    console.log(req.body);
    const data = await addingMensRecord.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Request
router.get("/mens", async (req, res) => {
  try {
    const getdata = await MensRanking.find({});
    res.send(getdata);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get Request for individual record
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getdata1 = await MensRanking.findById({ _id });
    res.send(getdata1);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Patch Method
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getdata2 = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getdata2);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete Method
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getdata2 = await MensRanking.findByIdAndDelete(_id);
    res.send(getdata2);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Sort collections
router.get("/mens", async (req, res) => {
  try {
    const getdata = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getdata);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
