// from data.js
var tableData = data;

buildTable(tableData)

var button = d3.select("#filter-btn");

button.on("click", function() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Selects input element and gets HTML node
    var inputElement = d3.select("#datetime").property("value");
    
    // Gets value property of input element
    // var inputValue = inputElement.property("value");
    if (inputElement) {
        var filteredData = tableData.filter(row => row.datetime === inputElement);
    }
    buildTable(tableData)    
});

function buildTable(data){
    // querying the table with id 'ufo-table'
    var table = d3.select("tbody");
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
