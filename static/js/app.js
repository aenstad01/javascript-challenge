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

// Select the input elements in the filter box
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");




// Complete the event handler function for the form
function runEnter() {

    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();


    // Get the value property of the input element
      var inputValue = inputDate.property("value")

    // if (inputDate.property("value").length > 0) {
    //     var inputValue = inputDate.property("value");
    // }
    // else {
    //     var inputValue = "x";
    // }

    var cityInput = inputCity.property("value");


    var filteredData = tableData.filter(sighting => 
        (sighting.datetime === inputValue)
        ||
        (sighting.city === cityInput)
        );

        
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
inputDate.on("change", runEnter);
inputCity.on("change", runEnter);
inputState.on("change", runEnter);
inputCountry.on("change", runEnter);
inputShape.on("change", runEnter);




 