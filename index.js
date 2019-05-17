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
      return "${driver["name"]} is from ${driver["hometown"]}"
        // nameDictionary.push({firstName: driver["name"], lastName: driver.split(" ")[1]});
  });
  // return nameDictionary;
};

function attributesToPhrase(drivers) {
  
};
