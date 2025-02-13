var myObject = {};    // Create an empty object);
myObject.myProperty = "myValue";    // Add a property to myObject

var mountie = {
    player: "Sally",
    cash: 1275,
    realEstate: [],

    buyProperty: function(property) {
        this.cash -= property.cost;
        this.realEstate.push(property);
    }
}

// accessing properties and methods
console.log(mountie.player);    // Sally


var ventnor = {

    price: 260,
    houses: 0,
    mortgage: 130,
}