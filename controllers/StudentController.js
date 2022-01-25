//Import model Student
const Student = require("../models/Student");

//Buat Class Student Controller
class StudentController {
    async index(req, res) {
        const students = await Student.all();
        //console.log(students);

        const data = {
            message: "Menampilkan data student",
            data: students,
        };
        res.status(200).json(data);
    }

    async store(req, res) {
        const students = await Student.create(req.body);
        console.log(students);
        //const { name } = req.body;
        //students.push(nama);
        
        const data = {
            message: "Menambahkan data student",
            data: students,
        };
        res.status(200).json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        students[id] = nama;

        const data = {
            message: `Merubah data student id ${id}, nama ${nama}`,
            data: students,
        };
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;
        students.splice([id], 1);

        const data = {
            message: `Menghapus data student id ${id}`,
            data:  students,
        };
        res.json(data);
    }
}

//Object Student Controller
const object = new StudentController();

//Export object
module.exports = object;