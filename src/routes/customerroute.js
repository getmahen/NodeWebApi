var CustomerController = require('../controllers/customercontroller');

var customerRouter = function(express){

    var customer = new CustomerController();

    var router = express.Router();

    router.route('/')
        .get(function(request, response){
            response.send(customer.getAll());
        });

    router.route('/:id')
        .get(function(request, response){
            var customerId = request.params.id;

            response.send(customer.getById(customerId));
        });

    return router;
};

module.exports = customerRouter;