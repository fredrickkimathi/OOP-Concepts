class Vehicle{

    constructor(name, type, cost){
        this.name = name;
        this.type = type;
        this.cost = cost;
        
        let discount = 50000;

        function calculateFinalCost(){
            let finalCost = this.cost - discount;
            console.log('The final cost for the'+this.name + ' is ' +finalCost );
        };
        this.calculateFinalCost = calculateFinalCost;
    };
    
    fuel(){
        console.log(this.name + ' uses fuel to run');
    };

};

Vehicle.prototype.getType = function(){
    return this.type;
};

// let truck = new Vehicle('Isuzu','Truck',2000000);
// truck.fuel();
// truck.calculateFinalCost();

class Mazda extends Vehicle {
    constructor(name, type, cost) {
        super(name, type, cost); // Call the parent constructor
    }

    fuel() {
        console.log(this.name + ' Uses Diesel to run');
    }

    topSpeed(speed) { // Override and define specific topSpeed for Mazda
        console.log('The top speed for ' +this.name +' is ' +speed);
    }
}

let demio = new Mazda('Demio', 'small car', 2000000); // Provide required arguments
demio.fuel();
demio.topSpeed('180 KM/Hr');
demio.getType('small car');
demio.calculateFinalCost(); 
console.log(' Initial Cost was:', demio.cost);