function produceDrivingRange(blockRange) {
  return function (start, end) {
    // that then calculates whether a given trip is within range. For example,
    //  produceDrivingRange(10) returns a function that will return false 
    //  if the trip is over 10 blocks distance and true if the distance is 
    //  within range. So produceDrivingRange returns a function that we can 
    //  then use to calculate if a trip is too large for a driver. We recommend 
    //  referencing the test/indexTest.js for more details.
    let distance = Math.abs(parseInt(end) - parseInt(start));
    let displacement = blockRange - distance;
    return displacement > 0 ? `within range by ${Math.abs(displacement)}` : `${Math.abs(displacement)} blocks out of range`;      
  } 
} 
function produceTipCalculator(percent) {
  return function (fare) {
    // that then calculates a tip. For example, produceTipCalculator(.10) 
    // returns a function that calculates ten percent tip on a fare. 
    // produceTipCalculator(.20) returns a function that calculates 
    // twenty percent tip on a fare.
    return fare * percent;
  } 
} 
function createDriver() {
  // a function that returns a Driver class. The class has reference to a driverId 
  // that is incremented each time a new driver is created. The rest of the code base 
  // does not have access to driverId.
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
} 