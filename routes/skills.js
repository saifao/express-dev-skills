//make an instance of the Router class from express
var express = require('express');
var router = express.Router();

// Require the controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills" but don't show explicitly in this router file
// Read all skills: GET /skills   index
router.get('/', skillsCtrl.index)

module.exports = router;
