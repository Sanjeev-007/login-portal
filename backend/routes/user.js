

const express=require("express")
const router=express.Router()

const {isSignedin,isAuthenticated}=require("../controllers/auth")
const { getUserById , getUser,updateUser}=require("../controllers/user")

router.param("userId", getUserById)

router.get("/user/:userId",isSignedin,isAuthenticated, getUser);
router.put("/user/:userId",isSignedin,isAuthenticated,updateUser);

module.exports=router;