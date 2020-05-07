const router = require('express').Router();
const path = require('path');
const noiseObservationRoutes = require(path.join(__dirname, './noise_observation'));
const userRoutes = require(path.join(__dirname, './users'));

router.use("/noise_observation", noiseObservationRoutes);
router.use("/user", userRoutes);

module.exports = router;
