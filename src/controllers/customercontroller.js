var CustomerDataService = require('../services/customerdataservice');
var _ = require('lodash');//UTILITY FOR ALL BASIC OPERATIONS (Ex: Array manipulation etc.). This is just like UnderScore

var CustomerController = function(){

    var service = new CustomerDataService();

    var getAllCustomers = function(request, response){
        //return service.CustomerData; //THIS IS A MOCK DATA ARRAY
        return service.GetAll(request, response);

    };

    var getCustomerById = function(request, response){
        // return _.find(service.CustomerData, function(data){
        //     return (data.id == id);
        // });

        return service.GetById(request, response);
    };

    var addCustomer = function(request, response){
        service.Save(request, response);
    };

    return (
        {
            getAll: getAllCustomers, 
            getById: getCustomerById,
            add : addCustomer
        });
};

module.exports = CustomerController;