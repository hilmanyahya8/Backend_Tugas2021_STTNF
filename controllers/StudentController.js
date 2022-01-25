const students = require("../data");

class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan data student",
            data: students,
        };
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        students.push(nama);

        const data = {
            message: "Menambahkan data student",
            data: students,
        };
        res.json(data);
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