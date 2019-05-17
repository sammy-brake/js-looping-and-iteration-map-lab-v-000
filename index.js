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
  for (const fullName of drivers) {
      nameDictionary[fullName[0]] = fullname[1];
  };
  return nameDictionary;
};
