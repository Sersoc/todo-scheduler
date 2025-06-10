const express = require("express");
const jwt = require("jsonwebtoken");
const { signInUser } = require("../controllers/signInController");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, userPassword, userName } = req.body;

  if (!userId || !userPassword) {
    return res.status(400).json({ message: "Please Insert ID or Password" });
  }
  try {
    const response = signInUser(userId, userPassword, userName);
    if (response){
       return res.status(200).json({ok:true});
    } else {
        return res.status(200).json({ok:false});
    }
    
  } catch (error) {
    console.log('Error During Sign In');
    return res.status(500).send(error);
  }
});

module.exports = router;
