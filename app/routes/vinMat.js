var express = require('express');
var router = express.Router();

var VinMat     = require('../models/vinMat');
var Counter     = require('../models/counter');

router.route('/')
.get(function(req, res) {
  VinMat.find(function(err, vinMat) {
    if (err) {
      handleError(res, err.message, "Failed to get data.");
    } else {
      res.status(200).json(vinMat);
    }
  });

})
.post(function(req, res) {
  var newWineFood = req.body;
  var vinMat = new VinMat(newWineFood);

  Counter.findByIdAndUpdate("vinMatid",   { $inc: { seq: 1 } }, function(err, counter) {
    if (err) {
      handleError(res, err.message, "Failed to retreive counter");
    } else {
      vinMat._id = counter.seq;
      vinMat.save(function(err) {
        if (err) {
          res.status(500).json(err.message);
        } else {
          res.status(200).json(vinMat);
        }
      });
  }
  });


});
router.route('/:id')
.get(function(req, res) {
  VinMat.findById(req.params.id, function(err, vinMat) {
    if (err) {
      handleError(res, err.message, "Failed to get data");
    } else {
      res.status(200).json(vinMat);
    }
  });
})
.put(function(req, res) {
  VinMat.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, vinMat) {
    if (err) {
      handleError(res, err.message, "Failed to update data");
    } else {
      res.status(200).json(vinMat);
  }
  });

})
.delete(function(req, res) {
  VinMat.findByIdAndRemove(req.params.id, function (err, vinMat) {
    if (err) {
      handleError(res, err.message, "Failed to find data");
    } else {
      var response = {
        message: "WineFood successfully deleted",
        id: vinMat._id,
        namn: vinMat.ratt
      };
      res.send(response);
  }
  });
});


module.exports = router;
