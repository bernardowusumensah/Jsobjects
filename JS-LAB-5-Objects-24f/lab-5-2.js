//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


var bankCustomer   = {

lastName: "Agyekum",
branchNumber: 1200011,
accountBalance: 500.25,
interestRate: 1.03,
multipleAccounts: false, 

makeDeposit: function(depositAmount){
    this.accountBalance += depositAmount;   
    return ("Your current balance is now $" + this.accountBalance );
},

makeWithdrawal: function(withdrawalAmount){
    this.accountBalance -= withdrawalAmount;
    return ("Your current balance is now $" + this.accountBalance);
},

addInterest: function(){
    if(this.multipleAccounts === true){
       

        var interestRateAdded = this.interestRate + 0.005;
        this.accountBalance *= interestRateAdded;
    }
    else{
        this.accountBalance *= this.interestRate;
    }
    
    return ("Your current balance is now $" + this.accountBalance);
}
};
console.log(bankCustomer.makeDeposit(200.00));
console.log(bankCustomer.makeWithdrawal(75.00));
console.log(bankCustomer.addInterest());
