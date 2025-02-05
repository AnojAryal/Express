const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send([1, 2, 3]);
  });
  
router.get("/:id", (req, res) => {
    res.send(req.params.id);
  });
  

router.get("/posts/:year/:month", (req, res) => {
    res.send(req.params);
  });


module.exports = router;