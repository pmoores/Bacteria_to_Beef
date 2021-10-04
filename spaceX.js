// 12.3.1 Inspect an API call with D3.json()
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));


// 12.3.2 Load a JSON file with D3.json()
// Must run 'python -m http.server' in Terminal when loading an external file into a Javascript file
d3.json("samples.json").then(function(data){
    console.log(data);
});

