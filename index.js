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
    for (const fullName of driver) {
        nameDictionary.push({firstName: fullName[0], lastName: fullName[1]})
    };
    return nameDictionary;
  });

};
