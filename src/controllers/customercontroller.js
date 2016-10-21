var CustomerDataService = require('../services/customerdataservice');

var CustomerController = function(){

    var service = new CustomerDataService();

    var getAllCustomers = function(){
        return service.CustomerData;
    };

    var getCustomerById = function(id){
        return {id: id};
    };

    return (
        {
            getAll: getAllCustomers, 
            getById: getCustomerById
        });
};

module.exports = CustomerController;