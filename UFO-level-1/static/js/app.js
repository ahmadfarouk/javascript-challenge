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

