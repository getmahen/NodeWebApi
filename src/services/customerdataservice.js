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
        }
    ];  

    this.CustomerData = fakeCustomers;

};

module.exports = CustomerDataService;