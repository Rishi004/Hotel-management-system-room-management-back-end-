const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/add", (req, res) => {
    db.availablerooms
        .create({
            no: req.body.no,
            roomid: req.body.roomid,
            roomtype: req.body.roomtype,
            ac: req.body.ac,
            bed: req.body.bed,
            rent: req.body.rent,
        })
        .then((submitavailable) => res.send(submitavailable));
});

router.get("/show", (req, res) => {
    db.availablerooms.findAll().then((incomes) => res.send(incomes));
});

router.delete("/delete/:id", (req, res) => {
    db.availablerooms
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(() => res.send("Deleted"));
});

router.put("/edit", (req, res) => {
    db.availablerooms
        .update(
            {
                no: req.body.no,
                roomid: req.body.roomid,
                roomtype: req.body.roomtype,
                ac: req.body.ac,
                bed: req.body.bed,
                rent: req.body.rent,
            },
            {
                where: { id: req.body.id },
            }
        )
        .then(() => res.send("Updated"));
});

module.exports = router;
