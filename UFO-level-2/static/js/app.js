// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log (tableData)

var table_body = d3.select("tbody");
console.log (table_body)

tableData.forEach(function(xyz){
    //console.log (xyz);
    var added_row = table_body.append("tr");

    Object.entries(xyz).forEach(function([key, value]){
        //console.log(key, value);
        var new_td = added_row.append("td");
        new_td.text(value);
    })
})

var button = d3.select("#filter-btn");
d3.selectAll("#selFilterOption").on("change", updateFilter);

function updateFilter() {
    var dropdownMenu = d3.selectAll("#selFilterOption")
    var dropdownMenuValue = dropdownMenu.property("value")
    enter_date_input = d3.select("input")

    var fitlerTitle = d3.selectAll("#ufo-filter")

     if (dropdownMenuValue == "Date") {
        enter_date_input.property("value","1/1/2011")
        fitlerTitle.text("Enter a Date")
        console.log(dropdownMenuValue)
     }
     else if (dropdownMenuValue == "City") {
        enter_date_input.property("value","benton")
        fitlerTitle.text("Enter City Name")
        console.log(dropdownMenuValue)
     }
     else if (dropdownMenuValue == "State") {
        enter_date_input.property("value","ar")
        fitlerTitle.text("Enter State Name")
        console.log(dropdownMenuValue)
     }
     else if (dropdownMenuValue == "Country") {
        enter_date_input.property("value","us")
        fitlerTitle.text("Enter Country Name")
        console.log(dropdownMenuValue)
    }
    else if (dropdownMenuValue == "Shape") {
        enter_date_input.property("value","light")
        fitlerTitle.text("Enter a Shape")
        console.log(dropdownMenuValue)
    }
};

button.on("click", function() {
    table_body.html("");
    enter_date_input = d3.select("input")

    filter_value = enter_date_input.property("value");
    var filteredData = tableData.filter(data_datetime => data_datetime.datetime == filter_value);
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
})