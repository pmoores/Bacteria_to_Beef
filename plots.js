// Line Chart 12.1.2
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);



//Bar Chart 12.1.3
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

//  var layout = {
//      title: "Luncheon Survey",
//      xaxis: {title: "Food Option"},
//      yaxis: {title: "Number of Respondents"}
//  };

//  Plotly.newPlot("plotArea", [trace], layout);



// Bar Chart #2 - 12.1.3
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);



// Pie Chart 12.1.4
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);



// 12.2.1 Use the map() method to double all of the numbers in an array
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);



// Use map() to extract a specific property from each object in an 
// array 12.2.1
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);



// Use the filter() method to return an array of integers greater than
// 1 - 12.2.1
// var numbers = [1,2,3,4,5];
// var larger = numbers.filter(function(num){
//     return num > 1;
// });
// console.log(larger);



// Simplify the anonymous that is inside the map() and filter() methods
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);



// Use the sort() method to sort ages in ascending order - 12.2.1
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);



// Use the slice() method to display only the top five results
// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);



//Slice() at the end of an array 12.2.1
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );


