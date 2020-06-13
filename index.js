const express = require("express");
const cors = require("cors");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { nanoid } = require("nanoid");

const PORT = 4000;
const db = lowDb(new FileSync('db.json'));
const app = express();

db.defaults({ notes: [] }).write();

app.use(cors());
app.use(express.json());

app.get('/notes', (req,res) => {
  const data = db.get("notes").value();
  return res.json(data); 
});

app.post('/notes/new', (req,res) => {
  const note = req.body;
  db.get("notes").push({
    ...note,
    id: nanoid()
  }).write();
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
