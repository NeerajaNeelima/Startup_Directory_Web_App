const express=require('express');
const router=express.Router();
const {getAllDetails , getUniqueName}=require('../Controllers/control')

router.route("/pagination").get(getAllDetails);
router.route("/company").get(getUniqueName);

module.exports=router;