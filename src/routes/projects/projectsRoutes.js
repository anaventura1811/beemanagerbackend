const express = require('express');

const router = express.Router();

// inserir as validações depois

router.get('/');
router.put('/:id');
router.patch('/:id/done');
router.delete('/:id');

module.exports = router;