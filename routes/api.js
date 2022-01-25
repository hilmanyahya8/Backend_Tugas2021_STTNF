//Import Student Controller
const StudentController = require("../controllers/StudentController");

//Import Express
const express  = require("express"); 

//Object Express
const router = express.Router();

//Routing home
router.get("/", (req, res) => {
    res.send("Hello Express")
});

//Routing student GET
router.get("/students", StudentController.index);

//Routing student POST
router.post("/students", StudentController.store);

//Routing student PUT
router.put("/students/:id", StudentController.update);

//Routing student DELETE
router.delete("/students/:id", StudentController.destroy);

//Export routing
module.exports = router;