const db = require('../config/database');

class Patient {
    static all(callback) {
        const query = `SELECT * FROM patient`;

        db.query(query, (err, results) => {
            callback(results);
        });
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
          const query = 'INSERT INTO patient SET ? ';
          db.query(query, data, (err, results) => {
            if (err) reject(err);
            resolve(results.insertId);
          });
        });
    
        return new Promise((resolve, reject) => {
          const query = 'SELECT * FROM patient WHERE id = ?';
          db.query(query, id, (err, results) => {
            if (err) reject(err);
            resolve(results);
          });
        });
    }
}

module.exports = Patient;


