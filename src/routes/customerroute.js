var CustomerController = require('../controllers/customercontroller');

var customerRouter = function(express){

    var customerController = new CustomerController();

    var router = express.Router();

    router.route('/')
        .get(function(request, response){
            //var result = customerController.getAll(request, response);
            //response.send(customerController.getAll(request, response));

            customerController.getAll(request, response);
        });

    router.route('/:id')
        .get(function(request, response){
            // var customerId = request.params.id;
            // response.send(customerController.getById(request, response));

            customerController.getById(request, response);
        });

    router.route('/customer')
        .post(function(request, response){
            customerController.add(request, response);
            response.send({info: 'Customer created successfully'});
        });

    return router;
};

module.exports = customerRouter;