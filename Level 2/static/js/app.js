// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function BuildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) =>{
            var cell = row.append("td");
                cell.text(val);
        }
            
        );
    });
}

function handleClick(){
    var date = d3.select("#datetime").property("value");
    var state = d3.select("#state").property("value").toLowerCase();
    var city = d3.select("#city").property("value").toLowerCase();
    var country = d3.select("#country").property("value").toLowerCase();
    var shape = d3.select("#shape").property("value").toLowerCase();
    let filteredData = tableData;
    if (date){
        filteredData=filteredData.filter(row => row.datetime === date);
    }
    if (city){
        filteredData=filteredData.filter(row => row.city === city);
    }
    if (state){
        filteredData=filteredData.filter(row => row.state === state);
    }
    if (country){
        filteredData=filteredData.filter(row => row.country === country);
    }
    if (shape){
        filteredData=filteredData.filter(row => row.shape === shape);
    }
    BuildTable(filteredData);
}

d3.select("#filter-btn").on("click", handleClick);

BuildTable(tableData);