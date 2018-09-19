var express = require('express');
var router = express.Router();
var Pusher = require('pusher');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(request, response, next){

  console.log(request.query.channel);

  var channel = request.query.userid;

  var bulb = request.query.bulb;

  var action = request.query.action;
    // from database
    var pin = "14";

  var pusher = new Pusher({
        appId: '585477',
        key: '0bc7c03255c3e38e77e2',
        secret: '8ea48df318016ae20e3a',
        cluster: 'ap2',
        encrypted: true
    });

  // get channel name
  var channel = "rbpi-10-234";

  pusher.trigger(channel, 'my-event', {
      "message": pin + " " + action
  });

  console.log("Pusher triggered");

  response.json({action: "Successful"});
});

module.exports = router;
