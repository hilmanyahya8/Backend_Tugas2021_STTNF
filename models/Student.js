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
    
    //Insert ke db
    // static create(data) {
    //     return new Promise((resolve, reject) => {
    //         const sql = "INSERT INTO students SET ?";
    //         db.query(sql, data, (err, results) => { 
    //             resolve(results);
    //         });
    //     });
    // }

    static async create(data) {
        const id = await new Promise((resolve, reject) =>{
            //query insert ke database
            const sql = 'INSERT INTO students SET ?'

            db.query(sql,data,(err,results) => {
                //console.log(results.insertId);
                resolve(results.insertId);
            });
        });

        return new Promise((resolve, reject) => {
            //query select by id
            const sql = 'SELECT * FROM students WHERE id = ?'
            console.log(id);

            db.query(sql,id,(err,results) => {
                resolve(results);
            });
        });
    }
} 

// Export model
module.exports = Student;