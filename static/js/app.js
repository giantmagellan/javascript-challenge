// from data.js
var tableData = data;
console.log(tableData);

// Referencing the table body
var tbody = d3.select("tbody")

// // Loop through UFO Sightings data
// data.forEach(function(Sightings) {
//     //console.log(Sightings);
    
//     // Use d3 to append one table row 'tr' for each UFO Signting object
//     var row = tbody.append("tr");
//     // Object.entries to console.log each UFO Sighting value
//     Object.entries(Sightings).forEach(function([key, value]) {
//         console.log(key, value);
//     });
//     // d3 to append 1 cell per signting value
//     //var cell = row.append("td");
//     //cell.text(value);
// });

// key up event
// $('#datetime').on('keyup', function() {
//     var value = $(this).val();
//     console.log(value);

// });

buildTable(tableData)

// function searchTable() {
//     // returns new array
//     var filterData = []
//     // loops through all values and returns desired value
//     for (var i = 0; i < data.length; i++) {
//         value = value.
//         var date_time = data[j].datetime

//         if (date_time.includes(value)) {
//             filterData.push(data[i])
//         }
//     }
//     return filterData
// }

function buildTable(data){
    // querying the table with id 'ufo-table'
    var table = document.getElementById('ufo-table')
    table.innerHTML = ''
    // loop to create every single row
    for (var j = 0; j < data.length; j++) {
        // column names
        // var coldate = `datetime-${i}`
        // var colcity = `city-${i}`
        // var colstate = `state-${i}`
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
        table.innerHTML += row
                }
}

    
// function buildTable(data){
//     var table = document.getElementById('myTable')
//     table.innerHTML = ''
//     for (var i = 0; i < data.length; i++){
//         var colname = `name-${i}`
//         var colage = `age-${i}`
//         var colbirth = `birth-${i}`

//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].age}</td>
//                         <td>${data[i].birthdate}</td>
//                    </tr>`
//         table.innerHTML += row
//     }
// }
