function checkCashRegister(price, cash, cid) {
  let currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };
  let change = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };
  let amountToPay = cash - price;
  let total = 0;
  
  for(let value of cid) {
    total += value[1];
  }
  
  if(total < amountToPay) {
    return change;
  } else if(total === amountToPay) {
      change.status = "CLOSED";
      change.change = cid;
      return change;
  } else if(total > amountToPay) {
      change.status = "OPEN";
      
      /* this loop will stop when amountToPay will be equals to
      or less than 0 */
      for(let i = cid.length - 1;i >= 0;i--) {
        if(cid[i][1]) {
          if(Math.floor(amountToPay / currency[cid[i][0]]) > 0) {
          let maxAmount = ((Math.floor(amountToPay / currency[cid[i][0]]) * currency[cid[i][0]]) <= cid[i][1]) ? Math.floor(amountToPay / currency[cid[i][0]]) * currency[cid[i][0]] : cid[i][1];
          change.change.push([cid[i][0], maxAmount]);
          amountToPay = Number((amountToPay - maxAmount).toFixed(2));
          }
        }
      }
      if(amountToPay > 0) {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
        return change;
      }
      return change;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));