//Import database
const res = require("express/lib/response");
const db = require("../config/database");

//Model Student
class Student {
    static all() {
        return new Promise((resolve, reject) => {
            //Lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql, (err, results) => {
                resolve(results);
            }); 
        });        
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) =>{
            //query insert ke database
            const sql = 'INSERT INTO students SET ?'
            db.query(sql,data,(err,results) => {
                resolve(results.insertId);
            });
        });

        return new Promise((resolve, reject) => {
            //query select by id
            const sql = 'SELECT * FROM students WHERE id = ?'
            db.query(sql,id,(err,results) => {
                resolve(results);
            });
        });
    }

    static find(id) {
        //Lakukan promise SELECT BY ID
        return new Promise((resolve, reject) => {
            //query select by id
            const sql = 'SELECT * FROM students WHERE id = ?'
            db.query(sql,id,(err,results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        //Update data
        await new Promise ((resolve, reject) => {
            //Query untuk update data
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                (resolve(results));
            });
        });

        //SELECT data by id 
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        // Query delete 
        return new Promise ((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
} 

// Export model
module.exports = Student;