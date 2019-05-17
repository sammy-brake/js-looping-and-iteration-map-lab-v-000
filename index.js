// Code your solution in this file.
function lowerCaseDrivers(drivers) {
 let newDrivers = [];
  drivers.map(function(driver) {
     newDrivers.push(driver.toLowerCase());
  });
  return newDrivers
};

function nameToAttributes(drivers) {
  let nameDictionary = [];
  drivers.map(function(driver){
    
        nameDictionary.push({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]});
  });
  return nameDictionary;
};
