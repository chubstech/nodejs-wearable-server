const router = require('express').Router();
const path = require('path');
const { querier, connectionWrapper } = require(path.join(__dirname, '../../../db'));

async function createUser(user_id) {
    const user = await querier.user.create({
      user_id,
    });
    try {
      out = await connectionWrapper(user);
    } catch(e) {
      console.error(e);
    }
}

const users = {};

router.post('/', function(req, res) {
  const { user_id, data } = req.body;
  if (!(user_id && data)) {
    res.status(400);
    res.json({ error: "must send user_id and data." });
    return;
  }

  (async function () {
      console.log(users[user_id]);
    if(users[user_id] === undefined) {
        try {
          await createUser(user_id);
          users[user_id] = true;
        } catch(e) {
          console.error(e);
        }
    }

    if(!Array.isArray(data)) {
      res.status(500);
      res.json({ error: "data must be array of objects." });
      return;
    }
    for(const item of data) {
      if(typeof item !== "object") {
        res.status(500);
        return;
      }
      if(!('time_obs' in item && 'db_reading' in item)) {
        res.status(500);
        res.json({ error: "each data object must have time_obs and db_reading" });
        return;
      }
      try {
        const user = await querier.noiseObservation.create({
          time_obs: item.time_obs,
          user_id,
          db_reading: item.db_reading
        });
        out = await connectionWrapper(user);
      } catch (e) {
        console.error(e);
      }
    }
    res.json({ msg: "success" });
  })();
})

router.get('/user/:id?', function(req, res) {
  // This get endpoint retrieves all noise level data points by user_id
  const { id: user_id } = req.params;

  if(!user_id) {
    res.status(400);
    res.json({ error: "Must send id" });
    return;
  }
  (async function() {
    const doc = await querier.noiseObservation.get.user_id({
      user_id
    });
    const out = await connectionWrapper(doc);
    res.status(200);
    res.json(out);
  })();
});

module.exports = router;
