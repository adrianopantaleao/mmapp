let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let EmployeeSchema = require("../../models/Employee");

router.post("/create-employee", (req, res, next) => {
    EmployeeSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/", (req, res) => {
    EmployeeSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router.route("/update-employee/:id")
    .get((req, res) => {
        EmployeeSchema.findById(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data);
                }
            });
    })
    .put((req, res, next) => {
        EmployeeSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return next(error);
                    console.log(error);
                } else {
                    res.json(data);
                }
            }
        );
    });

router.delete("/delete-employee/:id",
    (req, res, next) => {
        EmployeeSchema.findByIdAndRemove(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data,
                    });
                }
            });
    });

module.exports = router;
