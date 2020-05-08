const router = require('express').Router();
const path = require('path');
const { querier, connectionWrapper } = require(path.join(__dirname, '../../../db'));

router.get('/', function(req, res) {
  (async function() {
    const doc = await querier.user.get({});
    const out = await connectionWrapper(doc);
    res.status(200);
    res.json(out);
  })();
});

module.exports = router;
