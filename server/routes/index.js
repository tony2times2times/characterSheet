// global vairables and imported software
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');


// base url returns index.html from public foulder
router.get('/', function(req, res) {
    console.log('Base URL reached. Returning index.html');
    res.sendFile(path.resolve('public/views/index.html'));
 });
//
// //handles get requests from clients and submits them to mongoDB
// router.get('/getflix/', function(req, res) {
//     console.log('getting flix');
//     Pet.find({}, function(err, userResults) {
//         if (err) {
//             console.log(err);
//             res.sendStatus(500);
//         } else {
//             //console.log('users: ' + userResults);
//             res.send(userResults);
//         }
//     });
// });
//
// //handles pull requests from clients ands ubmits them to mongoDB
// router.post('/postPet', function(req, res) {
//     console.log('posting data to DB!!!');
//     //package new pet fro req.body using the pet.js schema
//     var newPet = new Pet({
//         name: req.body.name,
//         animal: req.body.animal,
//         age: req.body.age,
//         image: req.body.image
//     });
//     //saves new pet to mongoDB
//     newPet.save(function(err) {
//         if (err) {
//             console.log("erorr: " + err);
//             res.sendStatus(500);
//         } else {
//             console.log("New pet posted.");
//             res.sendStatus(200);
//         }
//     });
// });
//
// router.delete('/deletePet/:id', function(req, res) {
//     console.log('deleting pet from DB!!!');
//     Pet.findByIdAndRemove(req.params.id, function(err) {
//         if (err) {
//             console.log("erorr: " + err);
//             res.send(req.body);
//         } else {
//             console.log("Pet has been euthanized");
//             res.send(req.body);
//         }
//     });
// });
//
// // Google routes
// router.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));
//
// router.get('/auth/google/callback', passport.authenticate('google'),function(){
//   console.log('this is working');
// }
// );

//makes router availble to server.js
module.exports = router;
