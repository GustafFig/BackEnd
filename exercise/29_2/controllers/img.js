const path = require('path');
const express = require('express');
const multer = require('multer');
const rescue = require('express-rescue');

const routerImg = express.Router();

routerImg.use('/read', express.static(path.join(__dirname, 'imgs'), { extensions: ['png', '.jpeg']}));

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'imgs'),
  filename: (_req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

routerImg.route('/')
  .post(upload.single('img'), (req, res, next) => {
    const { file } = req;
    if (!file) return next({ message: 'NO file to see here' });
    res.status(201).json({ file });
  });

module.exports = routerImg;
