const router = require('express').Router();

router.get('/', (req, res) => {
res.status(200).json({ message: 'Connected!' });
});

router.use('/api', require('../profile/profile-routes'));

module.exports = router;