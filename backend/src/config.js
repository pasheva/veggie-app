const fs = require("fs");
require('dotenv').config();
// const readFileSync = filename => fs.readFileSync(filename).toString("utf8");

// Constants
module.exports = {
  database: {
    host: process.env.DB_HOST,
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DB_PASS || "veggie-root", 
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DB,
    // password: process.env.DATABASE_PASSWORD || 'veggie-root',// ? readFileSync(process.env.DATABASE_PASSWORD): null
  },
  port: process.env.PORT || 8080
  // if you're not using docker-compose for local development, this will default to 8080
  // to prevent non-root permission problems with 80. Dockerfile is set to make this 80
  // because containers don't have that issue :)
};
