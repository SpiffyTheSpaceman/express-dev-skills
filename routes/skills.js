var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

module.exports = router;

/* GET skills listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:index', skillsCtrl.show);



router.post('/', skillsCtrl.create);
router.delete('/:index', skillsCtrl.delete)