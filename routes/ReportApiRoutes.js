const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/show", (req, res) => {
    db.reports.findAll().then((incomes) => res.send(incomes));
});

module.exports = router;
