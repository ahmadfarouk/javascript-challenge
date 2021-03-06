// from data.js
var tableData = data;
var selector = "Date"

// YOUR CODE HERE!
//console.log (tableData)

var table_body = d3.select("tbody");
//console.log (table_body)

tableData.forEach(function(xyz){
    //console.log (xyz);
    var added_row = table_body.append("tr");

    Object.entries(xyz).forEach(function([key, value]){
        //console.log(key, value);
        var new_td = added_row.append("td");
        new_td.text(value);
    })
})

var mainForm = d3.select("#main-form");
mainForm.on("change", formChange)

function formChange () {
    d3.event.preventDefault ();

    table_body.html("");
    enter_date_input = d3.select("#datetimeSelection")
    enter_city_input = d3.select("#citiesSelection")
    enter_state_input = d3.select("#statesSelection")
    enter_country_input = d3.select("#countriesSelection")
    enter_shape_input = d3.select("#shapesSelection")

    filter_date_value = enter_date_input.property("value");
    filter_city_value = enter_city_input.property("value");
    filter_state_value = enter_state_input.property("value");
    filter_country_value = enter_country_input.property("value");
    filter_shape_value = enter_shape_input.property("value");

    var filteredData = tableData
    if (filter_date_value) {filteredData = tableData.filter(data_datetime => data_datetime.datetime == filter_date_value); }
    if (filter_city_value) {filteredData = filteredData.filter(data_city => data_city.city == filter_city_value); }
    if (filter_state_value) {filteredData = filteredData.filter(data_state => data_state.state == filter_state_value); }
    if (filter_country_value) {filteredData = filteredData.filter(data_country => data_country.country == filter_country_value); }
    if (filter_shape_value) {filteredData = filteredData.filter(data_shape => data_shape.shape == filter_shape_value); }
    //console.log (filteredData);

    filteredData.forEach(function(xyz){
        //console.log (xyz);
        var added_row = table_body.append("tr");
    
        Object.entries(xyz).forEach(function([key, value]){
            //console.log(key, value);
            var new_td = added_row.append("td");
            new_td.text(value);
        })
    })
}