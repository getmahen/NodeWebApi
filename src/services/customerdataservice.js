var Customer = require('../models/customer');

var CustomerDataService = function(){
    //Fake DATA
    var fakeCustomers =  [
        {
            id: 1111,
            FirstName: 'Mahendra_1',
            LastName: 'Rekapally_1'
        },
        {
            id: 2222,
            FirstName: 'Mahendra_2',
            LastName: 'Rekapally_2'
        },
        {
            id: 3333,
            FirstName: 'Mahendra_3',
            LastName: 'Rekapally_3'
        }
    ];  

    this.CustomerData = fakeCustomers;

    this.Save = function(request, response){
        var newCustomer = new Customer(request.body);
        newCustomer.save(function(err){
            if(err){
                response.send({info: 'Customer created Failed!!'});
            }
            else{
                response.send({info: 'Customer created successfully'});
            }
        });
    };

    this.GetAll = function(request, response){
        Customer.find({},function(error, customers){
            if(error){
                response.send({info: 'GetAll Customers Failed!!'});
            }
            else{
                if(customers){
                    return response.json(customers);
                }
                return response.json({info:'Not found'});
            }
        });
    };

    this.GetById = function(request, response){
        var id = request.params.id;

        Customer.findOne({_id: id},function(error, customer){
            if(error){
                response.send({info: 'GetCustomerById Failed!!'});
            }
            else{
                if(customer){
                    return response.json(customer);
                }
                return response.json({info:'Not found'});
            }
        });
    };

};

module.exports = CustomerDataService;