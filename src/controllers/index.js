const router = require('express').Router();

const indexRoutes = require('./indexRoutes');

router.use('/', indexRoutes);
// router.use('/api', apiRoutes);

module.exports = router;
