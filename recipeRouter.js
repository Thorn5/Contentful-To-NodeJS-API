const express = require('express');
const router = express.Router();
const { query } = require('express');
const { Pool } = require('pg');
const pool = new Pool();

// test ok!
// router.get("/", (req, res) => {
//     pool
//     res.send("Hey hey... working!")
//         .catch(e => {
//             console.log(e)
//             res.sendStatus(500)
//         });
// })

router.get("/", (req, res) => {
    pool
        .query('SELECT * from recipes;')
        .then(({ rows }) => res.json(rows))
        .catch(e => {
            console.log(e)
            res.sendStatus(500)
        });
});

router.get("/:id", (req, res) => {
    pool
    const {id} = req.params;
    console.log("recipe id: ", id);
    pool
    .query('SELECT * from recipes WHERE id=$1;', [id])
    .then(({rows}) => res.json(rows))
    .catch(e => {
      console.log(e)
      res.sendStatus(500)
    });
});

module.exports = router