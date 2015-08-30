var express = require('express');
var router = express.Router();
var lib = require('../models/library.js');

var storage = new lib.ItemLibrary();
  storage.addItem('Noodles');
  storage.addItem('Tomatoes');
  storage.addItem('Peppers');

// GET - all items
router.get('/items', function(req, res) {
  res.json(storage.items);
});

router.post('/items', function(req, res) {
  storage.addItem(req.body.name);
  res.json({message: "Successfully added an item!"});
});

res



module.exports = router;
