const express = require("express");
const app = express();
const DBconnect = require("./DB/DBconfig");
const TodoModel = require("./model/TodoModel");

DBconnect();
app.use(express.json());

// GET ALL TODO

app.get("/getalltodo", async (req, res) => {
  let getalltodo = await TodoModel.find({});
  res.status(200).send({ data: getalltodo });
});

// GET ONE TODO by ID

app.get("/getonetodo/:id", async (req, res) => {
  let getonetodo = await TodoModel.findById(req.params.id);
  res.status(200).send({ data: getonetodo });
});

// CREATE TODO

app.post("/createtodo", async (req, res) => {
  let { name, email, contact } = req.body;
  let createtodo = new TodoModel({
    name: name,
    email: email,
    contact: contact,
  });
  await createtodo.save();
  res.status(201).send({ msg: "Your Data Posted in Database" });
});

//  DELETE TODO

app.delete("/deletetodo/:id", async (req, res) => {
  let id = req.params.id;
  let deletetodo = await TodoModel.findByIdAndDelete({ _id: id });
  res.status(200).send({ success: "Deleted Todo", deletetodo });
});

// UPDATE TODO

app.patch("/updatetodo/:id", async (req, res) => {
  let id = req.params.id;
  let { name, email, contact } = req.body;
  let updatetodo = await TodoModel.findByIdAndUpdate(
    { _id: id },
    { name: name, email: email, contact: contact, update: true }
  );
  res.status(200).send({ success: "UpDate Success!", updatetodo });
});

app.listen(3000, () => {
  console.log("Server is connected");
});
