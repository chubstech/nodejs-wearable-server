const router = require('express').Router();
const path = require('path');
const noiseObservationRoutes = require(path.join(__dirname, './noise_observation'));

router.use("/noise_observation", noiseObservationRoutes);

module.exports = router;
