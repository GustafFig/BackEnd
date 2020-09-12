const multer = require('multer');
const fs = require('fs');
const path = require('path');
const express = require('express');

const multi = express.Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'multi'),
  filename: (_req, { originalname }, callback) => {
    callback(null, originalname);
  },
});

const uploadMany = multer({ storage });

multi.post('/', uploadMany.array('files', 10), (req, res, next) => {
  const { files } = req;

  if (!files) return next({ message: 'Any file' });

  const names =  files.map(({ originalname }) => originalname );

  return res.status(201).json({ files: names });
});

module.exports = multi;
