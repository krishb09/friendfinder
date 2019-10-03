// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

//first is italian
//second is indian
var resArray = [
    {
        "name" : "Samantha", 
        "scores": [
            5, 
            1, 
            1, 
            5, 
            4, 
            4
        ]
    }, 
    {
        "name": "Brett", 
        "scores": [
            1, 
            5, 
            5, 
            2, 
            1, 
            1
        ]
    }
  ];
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = resArray;

  