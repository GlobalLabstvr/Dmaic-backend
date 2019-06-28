const express = require("express");


const Dmaic = require("../models/dmaic");

const router = express.Router();

router.post("", (req, res, next) => {
  const dmaic = new Dmaic(req.body);
  console.log('body:'+JSON.stringify(req.body));
  dmaic.save().then(createdDmaic => {
    res.status(201).json(createdDmaic);
    
  });
});


router.get("", (req, res, next) => {
  console.log('coming here');
  Dmaic.find().then(dmaics => {
    res.status(200).json(dmaics);
  });
});


router.get("/:id", (req, res, next) => {
  Dmaic.find({userId:req.params.id}).then(dmaic => {
    if (dmaic) {
      res.status(200).json(dmaic);
    } else {
      res.status(404).json({ message: "Dmaic not found!" });
    }
  });
});



router.delete("/:id", (req, res, next) => {
  Dmaic.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Dmaic deleted!" });
  });
});

/*

router.put("/:id",(req, res) => {
  Dmaic.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, dmaic) {
      if (err) return next(err);
      res.send('dmaic udpated.');
  });
});*/

module.exports = router;
