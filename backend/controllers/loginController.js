const pool = require("../config/db");

const isUserValid = async (userId, userPassword) => {
  try {
    const query = `SELECT EXISTS(SELECT 1 FROM tb_users WHERE email = ? AND password = ?) AS isValid`;

    const result = await pool.query(query, [userId, userPassword]);

    if (result[0][0].isValid === 1) {
      console.log("Valid credentials: Match found");
      return true;
    } else {
      console.log("Invalid credentials: No match found");
      return false;
    }
  } catch (error) {
    console.error("Error in user validation:", error);
    throw error;
  }
};

module.exports = { isUserValid };
