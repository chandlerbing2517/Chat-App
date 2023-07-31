const express=require ('express');
const router=express.Router();
const { allUsers,registerUser,authUser} = require("../Controllers/userControllers");
const {protect} = require("../middleware/authMiddleware")
router.route('/').post(registerUser).get(protect,allUsers);
router.post('/login',authUser);
module.exports=router;