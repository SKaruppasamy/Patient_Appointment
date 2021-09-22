let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Patient Appointment API'
    });
});

//Import Patient Controller
var Controller = require('../Controller/Controller.js');

// Patient routes
router.route('/Patient')
    .get(Controller.index)
    .post(Controller.add);

router.route('/Patient/:Patient_id')
    .get(Controller.view)
    .patch(Controller.update)
    .put(Controller.update)
    .delete(Controller.Delete);

//Export API routes
module.exports = router;