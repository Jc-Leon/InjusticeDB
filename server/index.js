require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.get('/api/characters', (req, res, next) => {
  const sql = `select "name", "imageUrl","characterId"
              from "characters" `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/characters/:characterId', (req, res, next) => {
  const characterId = parseInt(req.params.characterId, 10);
  const sql = `
    select "characters"."name" as "characterName","characters"."imageUrl" as "characterImage", json_agg("moves") as "moves"
      from "characters"
      left join "moves" using ("characterId")
      left join "moveCategories" using ("moveCategoryId")
    where "characterId" = $1
    group by "characterId"
  `;
  const params = [characterId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.use(express.json());

app.post('/api/moves/', (req, res, next) => {
  const {
    characterId,
    moveCategoryId,
    name,
    input,
    moveType,
    damage,
    blockDamage,
    startUp,
    active,
    recover,
    blockAdv,
    hitAdv,
    cancel
  } = req.body;
  const sql = `
insert into "moves" ("characterId", "moveCategoryId", "name", "input", "moveType", "damage","blockDamage", "startUp", "active","recover","blockAdv", "hitAdv","cancel" )
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
  `;
  const params = [
    characterId,
    moveCategoryId,
    name,
    input,
    moveType,
    damage,
    blockDamage,
    startUp,
    active,
    recover,
    blockAdv,
    hitAdv,
    cancel
  ];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
