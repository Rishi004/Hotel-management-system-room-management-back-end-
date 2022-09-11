const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/add", (req, res) => {
    db.bookingdetails
        .create({
            fname: req.body.fname,
            lname: req.body.lname,
            pnumber: req.body.pnumber,
            noofperson: req.body.noofperson,
            rtype: req.body.rtype,
            nic: req.body.nic,
            depDate: req.body.depDate,
            arrDate: req.body.arrDate,
        })
        .then((submitbooking) => {
            res.send(submitbooking);
            db.reports
                .findOne({
                    where: { arrDate: req.body.arrDate },
                })
                .then((data) => {
                    if (data) {
                        db.reports.update(
                            {
                                booked: data.booked + 1,
                            },
                            {
                                where: {
                                    id: data.id,
                                },
                            }
                        );
                    } else {
                        db.reports
                            .create({
                                arrDate: req.body.arrDate,
                                booked: 1,
                            })
                            .then((data) => {
                                console.log("data**********", data);
                            });
                    }
                    console.log(data);
                });
        });
});

router.get("/show", (req, res) => {
    db.bookingdetails.findAll().then((incomes) => res.send(incomes));
});

router.delete("/delete/:id", (req, res) => {
    db.bookingdetails
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(() => res.send("Deleted"));
});

router.put("/edit", (req, res) => {
    db.bookingdetails
        .update(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                pnumber: req.body.pnumber,
                noofperson: req.body.noofperson,
                rtype: req.body.rtype,
                nic: req.body.nic,
                depDate: req.body.depDate,
                arrDate: req.body.arrDate,
            },
            {
                where: { id: req.body.id },
            }
        )
        .then(() => res.send("Updated"));
});

module.exports = router;
