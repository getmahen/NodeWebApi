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

    this.Save = function(customer){
        var newCustomer = new Customer(customer);
        newCustomer.save(function(err){
            if(err){

            }
            else{

            }
        });
    };

    this.GetAll = function(request, response){
        Customer.find({},function(error, customers){
            if(error){

            }
            else{
                return response.json(customers);
            }
        });
    };

    this.GetById = function(request, response){
        var id = request.params.id;

        Customer.findOne({_id: id},function(error, customer){
            if(error){

            }
            else{
                return response.json(customer);
            }
        });
    };

};

module.exports = CustomerDataService;