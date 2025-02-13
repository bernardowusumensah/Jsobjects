//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
//alert("PART 1: I OBJECT!");
var meObject = {
      
    name: "Bernard",
    age: 31,
    email: "tgatelbernard@gmail.com",
    address: "10 Belfied Road, Etobicoke, ON",

     myAddress: function(name, address){
        alert("My name is " + this.name + " and I live at " + this.address);
    
    }
};
meObject.myAddress();
console.log(meObject.name);