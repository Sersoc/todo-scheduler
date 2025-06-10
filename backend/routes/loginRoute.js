const express = require("express");
const jwt = require("jsonwebtoken");
const { isUserValid } = require("../controllers/loginController");

const router = express.Router();

router.get("/", async (req, res) => {
  const { userId, userPassword } = req.body;
  try {
    const result = await isUserValid(userId, userPassword);

    if (result) {
      const token = jwt.sign({ userId: userId }, "token_key", {
        expiresIn: "1h",
      });
      console.log("Token generated:", token);

      return res.json({ token });
    } else {
      console.log(`Login Failed for user ${userId}`);
      return res.status(401).send("Login Fail");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error During Login");
  }
});

module.exports = router;
