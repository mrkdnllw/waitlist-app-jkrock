const db = require("../models");
// const Tutorial = db.tutorials;
const Waitlistee = db.waitlistee;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    // const tutorial = new Tutorial({
    //     title: req.body.title,
    //     description: req.body.description,
    //     published: req.body.published ? req.body.published : false
    // });

    const waitlistee = new Waitlistee({
        name: req.body.name,
        email: req.body.email,
        tag: req.body.tag,
        // published: req.body.published ? req.body.published : false
    });

    // Save Tutorial in the database
    // tutorial
    //     .save(tutorial)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the Tutorial."
    //         });
    //     });

    waitlistee
        .save(waitlistee)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the waitlistee."
            });
        });
};

// Retrieve all waitlistee from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Waitlistee.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving waitlistee."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Waitlistee.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found waitlistee with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving waitlistee with id=" + id });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Waitlistee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Waitlistee with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Waitlistee.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Waitlistee with id=${id}. Maybe Waitlistee was not found!`
                });
            } else {
                res.send({
                    message: "Waitlistee was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Waitlistee with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

    Waitlistee.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Waitlistee were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Waitlistees."
            });
        });

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Waitlistee.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving waitlistees."
            });
        });
};


exports.sample1 = (req, res) => {
    // Waitlistee.find({ published: true })
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving waitlistees."
    //         });
    //     });

    try {
        res.send("heyy!");
    }
    catch(e){

        res.status(500).send({message: "sample message"});

    }

 
};