const router = require('express').Router();
const path = require('path');
const { querier, connectionWrapper } = require(path.join(__dirname, '../../../db'));

router.get('/', function(req, res) {
  // This get endpoint retrieves all noise level data points by user_id
  const { id: user_id } = req.params;

  if(!user_id) {
    res.status(400);
    res.json({ error: "Must send id" });
    return;
  }
  (async function() {
    const doc = await querier.noiseObservation.get();
    const out = await connectionWrapper(doc);
    res.status(200);
    res.json(out);
  })();
});

module.exports = router;
