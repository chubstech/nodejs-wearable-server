const fs = require('fs');
//returns user path
const path = require('path'); 

const {
  query,
  connectionWrapper
} = require('../src/db');

//reads setup file and returns data
const sql = fs.readFileSync(path.join(__dirname, '../src/db/nodejs_sql_api/setup.sql'), 'utf-8')
              .replace(/\n/g, " ");

//sets up connection to database and returns connection
async function setup() {
  const out = await connectionWrapper((conn) => query(conn, sql));
  await connectionWrapper((conn) => conn.end());
  return out;
}

setup().then(e => {
  console.log(e); process.exit();
}).catch(e => console.log(e));
