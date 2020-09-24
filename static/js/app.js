// From data.js
var tableData = data;

// Create a variable for the table body
var tbody = d3.select("tbody");



// Function to fix typos (need to add to loop)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


// Use forEach to loop through all tableData and insert the data into the table
tableData.forEach(function(sighting) {
    // Create a new table row for each UFO sighting
    var row = tbody.append("tr");

    // Update that row with the data for that UFO sighting
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);

    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");


// Complete the event handler function for the form
function runEnter() {

    tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach(function(sighting) {
        // Create a new table row for each UFO sighting
        var row = tbody.append("tr");

        // Update that row with the data for that UFO sighting
        Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);

        });
    });
};

// When the button is clicked, run the runEnter function
button.on("click", runEnter);



 