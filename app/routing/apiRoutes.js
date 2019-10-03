// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on food data
// ===============================================================================

var foodData = require("../data/food.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/food", function(req, res) {
    res.json(foodData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/food", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    var newUser = req.body; 
    //start at index 0
    var index = 0; 
    //set the max difference to 24 --- i have 6 questions
    var maxDiff = 24; 

    //loop through fooddata array
    for(var i=0; i<foodData.length; i++){
        var totalDiff = 0 ; 
        //go through each user in the fooddata and compare scores to each other
        for( var j=0; j <foodData[i].length; j++){
            //want to get absolute difference so no negative values
            totalDiff += Math.abs(parseInt(newUser.scores[j]) - foodData[i].scores[j]);
        }
        if(totalDiff < maxDiff){
            index = i; 
            maxDiff = totalDiff; //the max becomes new current diff so next time compare to that value 
        }
    }
    //push the data to the array
    foodData.push(newUser); 
    res.json(foodData[index]); //get that specific user(index) from the fooddata array 
  });
};
