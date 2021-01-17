var countries = data.map(a => a.country);
var cities = data.map(a => a.city);
var states = data.map(a => a.state);
var shapes = data.map(a => a.shape);

var countries_unique = countries.filter(function(item, pos){ return countries.indexOf(item)== pos; });
var city_unique = cities.filter(function(item, pos){ return cities.indexOf(item)== pos; });
var states_unique = states.filter(function(item, pos){ return states.indexOf(item)== pos; });
var shapes_unique = shapes.filter(function(item, pos){ return shapes.indexOf(item)== pos; });


console.log (countries_unique)
console.log (city_unique)
console.log (states_unique)
console.log (shapes_unique)