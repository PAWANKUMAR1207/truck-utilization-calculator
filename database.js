// // database.js
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./truckdata.db');

// // Create tables if they don't exist
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS calculations (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       destination TEXT,
//       truck_type TEXT,
//       truck_volume REAL,
//       truck_weight REAL,
//       trucks_required INTEGER,
//       volume_util REAL,
//       weight_util REAL,
//       timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
//     )
//   `);

//   db.run(`
//     CREATE TABLE IF NOT EXISTS skus (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       calculation_id INTEGER,
//       name TEXT,
//       qty INTEGER,
//       volume REAL,
//       weight REAL,
//       destination TEXT,
//       FOREIGN KEY (calculation_id) REFERENCES calculations(id)
//     )
//   `);
// });

// module.exports = db;
