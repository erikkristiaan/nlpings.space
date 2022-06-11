import express from 'express';

import { getDb } from '../db/conn.js';

// const pageNumber = 1;
const nPerPage = 10;

const router = express.Router();

router.get('/main/:page', async (req, res) => {
        let db = getDb('user_pinger_db');

        const result = await db.collection('userpings')
                            .find()
                            .sort({ 'time' : -1 })
                            .skip(req.params.page > 0 ? ((req.params.page - 1) * nPerPage) : 0 )
                            .limit(nPerPage)
                            .toArray();
        res.json(result);
});

router.get('/:ping_group/:page', async (req, res) => {
    let db = getDb('user_pinger_db');

    const result = await db.collection('userpings')
                        .find({ ping_group: req.params.ping_group.toUpperCase() })
                        .sort({ 'time' : -1 })
                        .skip(req.params.page > 0 ? ((req.params.page - 1) * nPerPage) : 0 )
                        .limit(nPerPage)
                        .toArray();
    res.json(result);
});

router.get('/search/:page', async (req, res) => {
    let db = getDb('user_pinger_db');

    // stores the query into an object.
    const query = req.query;

    const result = await db.collection('userpings')
                        .find(query)
                        .sort({ 'time' : -1 })
                        .skip(req.params.page > 0 ? ((req.params.page - 1) * nPerPage) : 0 )
                        .limit(nPerPage)
                        .toArray();
    res.json(result);
});

export default router;