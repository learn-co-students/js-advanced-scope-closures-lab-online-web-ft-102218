function produceDrivingRange(range){
  return (start, end) => { // New arrow function with two args
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
  return amount => amount * percent; // One line arrow function with one arg
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