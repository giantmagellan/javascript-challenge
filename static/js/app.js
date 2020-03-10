// from data.js
var tableData = data;
console.log(tableData);

buildTable(tableData)

var button = d3.select("#filter-btn");

button.on("click", function(){
    var inputElement = d3.select("datetime");
    console.log(inputElement);

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(date_time => date_time.datetime === inputValue);
    console.log(filteredData);

});


function buildTable(data){
    // querying the table with id 'ufo-table'
    var table = d3.select("tbody");
    console.log(table);
    table.innerHTML = ''
    // // Referencing the table body
    var newData = ""
    // loop to create every single row
    for (var j = 0; j < data.length; j++) {
        // // column names
        // Building out each table row to append each element
        var row = `<tr>
                        <td>${data[j].datetime}</td>
                        <td>${data[j].city}</td>
                        <td>${data[j].state}</td>
                        <td>${data[j].country}</td>
                        <td>${data[j].shape}</td>
                        <td>${data[j].durationMinutes}</td>
                        <td>${data[j].comment}</td>
                   </tr>`
        newData += row
                }
    table.html(newData);
}
