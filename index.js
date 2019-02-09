function produceDrivingRange(range){
  return function(start, end) {
    let x = parseInt(start);
    let y = parseInt(end);
    let difference = y - x;

    if (difference > range) {
      return `${difference - range} blocks out of range`;
    } else {
      return `within range by ${range - difference}`;
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