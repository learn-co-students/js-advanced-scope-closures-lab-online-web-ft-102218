function produceDrivingRange(blockRange) {
  return function (begin, end) {

    let start = parseInt(begin);
    let finish = parseInt(end);
    let distance = Math.abs(finish - start);
    let difference = blockRange - distance;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}


function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor( name ) {
      this.id = ++driverId
      this.name = name
    }
  }
}
