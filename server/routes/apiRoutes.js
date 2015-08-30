// // dependencies
// var express = require('express');
// var router = express.Router();
// var lib = require('../models/library.js');
//
// //vars
// var tempItemArray = [];
// var storage = new lib.ItemLibrary();
// tempItemArray.push(
//   storage.addItem('Noodles'),
//   storage.addItem('Tomatoes'),
//   storage.addItem('Peppers'));
//
//
// // GET - all items
// router.get('/items', function(req, res) {
//   res.jsom('items', storage);
// });
//
// // // POST - single item
// // router.post('/items', function(req, res, next) {
// //   var response = utilities.handlePost(req.body.puppyID, req.body.puppyName, req.body.puppyAge);
// //   res.json(response);
// // });
// //
// // // PUT - single item
// // router.put('/item/:id', function(req, res, next) {
// //   var response = utilities.handlePut(req.params.id, req.body);
// //   res.json(response);
// // });
// //
// // // DELETE - single item
// // router.delete('/item/:id', function(req, res, next) {
// //   var response = utilities.handleDelete(req.params.id);
// //   res.json(response);
// // });
//
// module.exports = router;
