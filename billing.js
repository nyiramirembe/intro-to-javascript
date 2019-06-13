/*this is the percentage thatdetermines the transaction charge*/
const transactionCharge = 0.025;
var amountTendered = 100000;
console.log("this is what the billed amount is (lesstransaction charges)");
console.log(amountTendered-(transactionCharge*amountTendered));