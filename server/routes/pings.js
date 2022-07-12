import express from 'express';

import { getDb } from '../db/conn.js';

const nPerPage = 10;
const router = express.Router();

// API endpoints
router.get('/search/:page', async (req, res) => {
  let db = getDb('user_pinger_db');

  // stores the query into an object.
  let query = req.query.q;
  let exp = `\\b${query}\\b`;

  const result = await db
    .collection('userpings')
    .find({ 'body.md': new RegExp(exp, 'i') })
    .sort({ time: -1 })
    .skip(req.params.page > 0 ? (req.params.page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();

  res.json(result);
});

router.get('/main/:page', async (req, res) => {
  let db = getDb('user_pinger_db');

  const result = await db
    .collection('userpings')
    .find()
    .sort({ time: -1 })
    .skip(req.params.page > 0 ? (req.params.page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();

  res.json(result);
});

router.get('/user/:username/:page', async (req, res) => {
  let db = getDb('user_pinger_db');
  let user = req.params.username;

  const result = await db
    .collection('userpings')
    .find({ author: new RegExp(user, 'ig') })
    .sort({ time: -1 })
    .skip(req.params.page > 0 ? (req.params.page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();

  res.json(result);
});

router.get('/:ping_group/:page', async (req, res) => {
  let db = getDb('user_pinger_db');

  const result = await db
    .collection('userpings')
    .find({ ping_group: req.params.ping_group.toUpperCase() })
    .sort({ time: -1 })
    .skip(req.params.page > 0 ? (req.params.page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();

  res.json(result);
});

export default router;
