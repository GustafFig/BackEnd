const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const multer = require("multer");
const rescue = require("express-rescue");

const app = express();

const PATH_TO_UPLOADS = path.join(__dirname, 'uploads');

app.use((req, _res, next) => { console.log(req.path, req.method); next(); } );

const storage = multer.diskStorage({
  destination: PATH_TO_UPLOADS,
  filename: async (req, file, callback) => {
    const { fileName } = req.body || {};
    if (!file || !fileName) {
      return callback({
        error: true,
        status: 422,
        message: "No file or fileName, please send all",
      });
    }

    const isValid = await fs.readdir(PATH_TO_UPLOADS)
      .then((files) => files.every((file) => file !== fileName));

    if (!isValid) return callback({ error: true, status: 409, message: 'Name not valid' });
    req.body.fileName = fileName.toLowerCase();
    return callback(null, req.body.fileName);
  },
});

const getFile = multer({ storage });

app.post('/', getFile.single('file'), (req, res, _next) => {
  const { filename } = req.file;
  res.status(200).json({ message: `arquivo salvo com o nome de ${filename}` });
});

app.get('/files', async (req, res, next) => {
  const files = await fs.readdir(PATH_TO_UPLOADS);
  res.status(200).json({ files });
});

app.route('/files/:filename').get(rescue(async (req, res, next) => {
  const { filename } = req.params;
  
  const exists = await fs.readdir(PATH_TO_UPLOADS)
    .then((files) => files.some((file) => file === filename));

  if (!exists) return next({ error: true, status: 404, message: 'No file with this name' });

  return res.download(path.join(PATH_TO_UPLOADS, filename));
}));

app.use('/files', express.static(PATH_TO_UPLOADS));

app.use('*', (req, res) => res.status(404).json({ message: 'page not found aqui' }));

app.use((err, _req, res, _next) => {
  console.log(err);
  if (err.error) return res.status(err.status).json({ message: err.message });
  res.status(500).json(err);
});

app.listen(3000, () => console.log(`Ouvindo na porta ${3000}`));
