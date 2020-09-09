const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const rescue = require('express-rescue');
const express = require('express');
let counter = 0;
const textRouter = require('express').Router();

const uploadField = multer();

const storeTextOfBody = rescue(async (req, res, next) => {
  const { buffer: text, originalname } = req.file || {};
  if (!text) return next({ message: 'No text' });
  await fs.writeFile(path.join(__dirname, `texts/${originalname}-${counter}`), text);
  return res.status(201).json({ text });
});

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'texts'),
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadText = multer({ storage });

textRouter.use('/read', express.static(path.join(__dirname, 'texts')));

textRouter.post('/field', uploadField.single('text'), storeTextOfBody)
textRouter.post('/file', uploadText.single('text'), (req, res) => {
  const { file } = req.body || {};
  res.status(201).json({ file });
});

module.exports = textRouter;
