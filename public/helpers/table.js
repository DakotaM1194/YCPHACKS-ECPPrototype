// Function to render the table based on filtered data
function renderTable(filteredData) {
    var tbody = $('table tbody');
    tbody.empty();
    filteredData.forEach(row => {
        var tr = $('<tr></tr>');
        row.forEach(cell => {
            tr.append(`<td>${cell}</td>`);
        });
        tbody.append(tr);
    });
}

// // If searchable flag is true
// if (searchable) {
//     $('#searchBtn').click(function() {
//         var query = $('#searchInput').val().toLowerCase();
//         var filteredData = data.filter(row =>
//             row[searchBy].toString().toLowerCase().includes(query)
//         );
//         renderTable(filteredData);
//     });
// }

// Initialize table with all data on page load
$(document).ready(function() {
    renderTable(data);
});
