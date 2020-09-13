const fs = require('fs').promises;
const { join } = require('path');
const express = require('express');
const rescue = require('express-rescue');
const { text, img, multi } = require('./controllers');

const app = express();

const { PORT = 3000 } = process.env;

const createLink = (type, name) => `http://localhost:3000/upload/${type}/${name}`;

app.use('/text', text);
app.use('/img', img);
app.use('/multi', multi);
app.route('/uploads')
  .get(rescue(async (_req, res) => {
    const files = await Promise.all([
      await fs.readdir(join(__dirname, '/controllers/texts')),
      await fs.readdir(join(__dirname, '/controllers/imgs')),
      await fs.readdir(join(__dirname, '/controllers/multi')),
    ]).then(([texts, imgs, multi]) => [
      ...texts.map((name) => createLink('texts', name)),
      ...imgs.map((name) => createLink('imgs', name)),
      ...multi.map((name) => createLink('multi', name)),
    ]);
    res.status(200).json({ files });
  }));

app.use('/upload/text', express.static('./controllers/texts'));
app.use('/upload/img', express.static('./controllers/imgs'));
app.use('/upload/multi', express.static('./controllers/multi'));

app.use((err, _req, res, _next) => {
  res.json({ errorMessage: err.message });
});


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
