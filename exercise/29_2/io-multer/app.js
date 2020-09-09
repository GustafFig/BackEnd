const express = require('express');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage });
app.use(express.static(__dirname + '/uploads'));

app.get('/ping', (req, res) => res.send('pong!'));

app.post('/up', upload.single('img'), (req, res) => {
  console.info(req.file);
  return res.send(`Você enviou ${req.file}`);
});

module.exports = app;
