const pool = require("../config/db");
const signInUser = async (userId,userPassword,userName) => {
    try {
        const query = `INSERT INTO tb_users (email,username,password) VALUES (?,?,?)`;

        const result = await pool.query(query,[userId,userName,userPassword]);

        console.log("Result",result);
    } catch (error) {
        throw error;
    }
}

module.exports = {signInUser};