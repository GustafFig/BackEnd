const multer = require('multer');
const fs = require('fs');
const path = require('path');
const express = require('express');

const multi = express.Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'multi'),
  filename: (_req, file, callback) => {
    console.log('file', file)
    callback(null, file.originalname);
  },
});

const uploadMany = multer({ storage });

multi.post('/', uploadMany.array('files', 10), (req, res, next) => {
  const { files } = req;
  console.log(Object.keys(req));
  if (!files) return next({ message: 'Any file' });
  const names =  files.map(({ originalname }) => originalname );
  return res.status(201).json({ files: names });
});

module.exports = multi;
