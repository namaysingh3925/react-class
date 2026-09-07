const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    ""
)
    .then(() => {
        console.log("connected to mongo");

    })
    .catch((err) => {
        console.log(err);
    })

const studentschema = new mongoose.Schema({
    name: String,
    email: String,
    rollno: String,
})

const student = mongoose.model("student", studentschema);

app.get("/students", async (req, res) => {
    try {
        const students = await student.find();
        res.json(students);
    }
    catch (error) {
        console.log(error);

    }
})

app.post("/students", async (req, res) => {
    try {

        const newstudnet = new student({
            name: req.body.name,
            email: req.body.email,
            rollno: req.body.rollno,

        });
        const savedstudent = await newstudnet.save();
        res.json({ savedstudnet });

    }
    catch (error) {
        console.log(error);
    }
})

app.put('/students/:id', async (req, res) => {
    try {
        const updatesdtudennt = await student.findByIdAndUpdate(req.params.id, { name: req.body.name, email: req.body.email }, { new: true });
        res.json(updatesdtudennt);
    }
    catch (error) {
        console.log(error);

    }

})

app.delete('/students/:id', async (req, res) => {
    try {
        await student.findByIdAndDelete(req.params.id);
        res.json({ message: "student deleted" });
    }
    catch (error) {
        console.log(error);

    }
})

app.get('/', (req, res) => {
    res.send("backend is running ")
})

app.listen(5000, () => {
    console.log("port is running on 5000");

})


