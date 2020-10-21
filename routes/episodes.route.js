var express = require('express');
let episode_service = require('../services/episode.service');
var router = express.Router();

router.get('/', async function(req, res, next){
    res.json(await episode_service.retrieveStemmedEpisodes());
});

module.exports = router;
