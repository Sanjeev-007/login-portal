var express = require("express");
var router = express.Router();
const { check}= require('express-validator');
const { signout, signup , signin,isSignedin} = require("../controllers/auth");

router.post("/signup", [
    check("name", "name should altleast 3 char").isLength({min: 3}),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be atleast 3 char").isLength({min:3})],
    signup);


router.get("/signout", signout);


router.post("/signin", [
    check("email", "Email is required").isEmail(),
    check("password", "Password field is Required").isLength({min:3})],
    signin);
// 

router.get("/testroute", isSignedin, (req,res)=>{
    res.json(req.auth);
})


module.exports = router;
