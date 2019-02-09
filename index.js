function produceDrivingRange(range){
  return function(start, end) {
    let x = start.split("th")[0];
    let y = end.split("th")[0];
    x = Number(x);
    y = Number(y);
    let distance = y - x;
    
    if (distance > range) {
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent;
  };
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}