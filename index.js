// Code your solution in this file.
function lowerCaseDrivers(drivers) {
 let newDrivers = [];
  drivers.map(function(driver) {
     newDrivers.push(driver.toLowerCase());
  });
  return newDrivers
};

function nameToAttributes(drivers) {
  let nameDictionary = {};
  drivers.map(function(driver){
    for (let fullName of driver) {
        nameDictionary[fullName[0]] = fullname[1];
    };
    return nameDictionary;
  });

};
