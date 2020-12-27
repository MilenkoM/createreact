const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/helloreact', controllers.helloReact);

module.exports = router;