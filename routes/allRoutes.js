const express = require("express");
const router = express.Router();
// const Mydata = require("./models/mydataSchema");
// const User = require("../models/customerSchema");
// const Customer = require("../models/customerSchema");
var moment = require("moment");
const userController = require("../controllers/userController");

//  GET Request
router.get("/", userController.user_index_get);
router.get("/edit/:id", userController.user_edit_get);

router.get("/view/:id", userController.user_view_get);

// POST Request

// 1st mehode
// router.post("/user/add.html", (req, res) => {
//   // console.log(req.body);
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// second method

router.post("/search", userController.user_search_post);

// Delete request
//  1st method
// router.delete("/edit/:id", (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// 2nd method
router.delete("/edit/:id", userController.user_delete);

// Put request (lezm ykoun fi name attribute bl input)
// router.put("/edit/:id", (req, res) => {
//   // console.log(req.body)
//   User.findByIdAndUpdate(req.params.id,req.body)
//   .then(() => {
//     res.redirect("/")
//    }).catch((err) => { console.log(err) })
// });

// 2sd method
router.put("/edit/:id", userController.user_put);

module.exports = router;

//   router.get("/user/view.html", (req, res) => {
//     res.render("user/view");
//   });
