require('dotenv').config();

// Credencials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qjuw2.mongodb.net/?retryWrites=true&w=majority`;
module.exports = uri;
