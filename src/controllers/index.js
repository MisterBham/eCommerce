const router = require('express').Router();

const indexRoutes = require('./indexRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;
