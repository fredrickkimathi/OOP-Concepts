function Vehicle(name, type, cost){
    this.name = name;
    this.type = type;
    this.cost = cost;

    let discount = 60000;

    let calculateFinalCost = function (){
        finalCost = cost - discount
        console.log('The Final cost for is: '+finalCost );
    };
    this.displayDetails=function(){
        console.log(this.name +' is a ' +this.type);
        console.log('The initial cost was: '+this.cost);
        calculateFinalCost();
        this.fuel();
    };


};
Vehicle.prototype.fuel = function () {
    console.log('It uses fuel to run');
};

hilux = new Vehicle("Hilux", "Pick-up",2000000 );
hilux.displayDetails();

class Mazda extends Vehicle{
    fuel(){
        console.log('Mazdas use diesel to run');
    };
    topSpeed(speed){
        console.log('The top speed for '+this.name + ' is ' +speed);
    }
};

demio = new Mazda('Demio', 'Small car',900000);
demio.displayDetails();
demio.topSpeed('180 KM/Hr')


