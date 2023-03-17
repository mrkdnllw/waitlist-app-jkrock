module.exports = app => {
    const waitlistees = require("../controllers/waitlistee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", waitlistees.create);
  
    // Retrieve all Tutorials
    router.get("/", waitlistees.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", waitlistees.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", waitlistees.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", waitlistees.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", waitlistees.delete);
  
    // Delete all Tutorials
    router.delete("/", waitlistees.deleteAll);
  
    app.use('/api/waitlistees', router);
  };