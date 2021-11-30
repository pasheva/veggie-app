// const knex = require('knex');
const { database } = require('./config');
const mysql = require('mysql2/promise');

// const connection = mysql.createConnection(database);

// module.exports = knex({
//   client: 'mysql2',
//   connection: database,
// });

async function query(sql, params) {
  const connection = await mysql.createConnection(database);
  const [rows,] = await connection.query(sql);
  console.log(rows);
  return rows;
}

module.exports = {
  query,
}