// From data.js
var tableData = data;

// Create a variable for the table body
var tbody = d3.select("tbody");




// Create a function to fix stray HTML characters
function fixTypos(x) {
    return [x.replace("&#39", "'"),
    x.replace("&#34", "'"),
    x.replace("&#33", "!")];
}

var typo = "It&#39s a beautiful day in the &#34neighborhood&#34 &#33";
var fixed = fixTypos(typo);

console.log(fixed);





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