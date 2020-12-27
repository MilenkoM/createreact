const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/helloE', controllers.helloReact);

module.exports = router;