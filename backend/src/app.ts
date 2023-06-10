import { Request, Response } from 'express';

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);
const PORT = 3003;

const db = require('./db');

app.get('/cook/list', (req: Request, res: Response) => {
  db.getCookList((rows: any) => {
    res.send(rows);
  })
});

app.get('/cook/kind/:kind', (req: Request, res: Response) => {
  let kind = req.params.kind;

  db.getCookByKind(kind, (rows: any) => {
    res.send(rows);
  });
});

app.get('/cook/category/:category', (req: Request, res: Response) => {
  let category = req.params.category;

  db.getCookByCategory(category, (rows: any) => {
    res.send(rows);
  });
});

app.get('/cook/ingredient/:ingredient', (req: Request, res: Response) => {
  let ingredient = req.params.ingredient;

  db.getCookByIngredient(ingredient, (rows: any) => {
    res.send(rows);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
