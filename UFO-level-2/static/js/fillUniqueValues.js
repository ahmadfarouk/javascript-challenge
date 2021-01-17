var dates = data.map(a => a.datetime);
var countries = data.map(a => a.country);
var cities = data.map(a => a.city);
var states = data.map(a => a.state);
var shapes = data.map(a => a.shape);

var dates_unique = dates.filter(function(item, pos){ return dates.indexOf(item)== pos; });
var countries_unique = countries.filter(function(item, pos){ return countries.indexOf(item)== pos; });
var cities_unique = cities.filter(function(item, pos){ return cities.indexOf(item)== pos; });
var states_unique = states.filter(function(item, pos){ return states.indexOf(item)== pos; });
var shapes_unique = shapes.filter(function(item, pos){ return shapes.indexOf(item)== pos; });

console.log (dates_unique);
console.log (countries_unique);
console.log (cities_unique);
console.log (states_unique);
console.log (shapes_unique);

datetime_select = d3.select ("#datetimeSelection");
countries_select = d3.select ("#countriesSelection");
states_select = d3.select ("#statesSelection");
cities_select = d3.select ("#citiesSelection");

function fillSelects ()
{
  datetime_select.append("option");
  for (i=0;i < dates_unique.length; i++)
    {
      
      var new_option = datetime_select.append("option");
      new_option.text(dates_unique[i]);
    }

  cities_select.append("option");
  for (i=0;i < cities_unique.length; i++)
    {
      
      var new_option = cities_select.append("option");
      new_option.text(cities_unique[i]);
    }

  states_select.append("option");
  for (i=0;i < states_unique.length; i++)
    {
      
      var new_option = states_select.append("option");
      new_option.text(states_unique[i]);
    }


  countries_select.append("option");
  for (i=0;i < countries_unique.length; i++)
    {
      
      var new_option = countries_select.append("option");
      new_option.text(countries_unique[i]);
    }

}

fillSelects ();