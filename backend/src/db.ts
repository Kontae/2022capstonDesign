const mysql = require('mysql');

const connenction = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12311231',
  port: 3306,
  database: 'kuking'
});

const getCookList = (callback: any) => {
  connenction.query('SELECT c.*, cw.content FROM cook c JOIN cook_way cw ON c.id = cw.cook_id', (err: any, rows: any) => {
    if (err) throw err;
    callback(rows);
  });
  // connenction.query('SELECT * from cook', (err: any, rows: any) => {
  //   if (err) throw err;
  //   callback(rows);
  // });
}

const getCookByKind = (kind: any, callback: any) => {
  connenction.query(`SELECT c.*, cw.content FROM cook c JOIN cook_way cw ON c.id = cw.cook_id WHERE c.kind = '${kind}'`, (err: any, rows: any) => {
    if (err) throw err;
    callback(rows);
  });
}

const getCookByCategory = (category: any, callback: any) => {
  connenction.query(`SELECT c.*, cw.content FROM cook c JOIN cook_way cw ON c.id = cw.cook_id WHERE c.category = '${category}'`, (err: any, rows: any) => {
    if (err) throw err;
    callback(rows);
  });
}

const getCookByIngredient = (ingredient: any, callback: any) => {
  connenction.query(`SELECT c.*, cw.content FROM cook c JOIN cook_way cw ON c.id = cw.cook_id JOIN recipe r ON r.recipe_id = c.recipe_id WHERE r.ingredient_name = '${ingredient}'`, (err: any, rows: any) => {
    if (err) throw err;
    callback(rows);
  });
}

module.exports = {
  getCookList,
  getCookByKind,
  getCookByCategory,
  getCookByIngredient
}
