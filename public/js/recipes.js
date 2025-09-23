//Retrieve all recipes from database and load into page
function loadRecipes() {
    checkUserHome()

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var recipeArray = [];

    //Set the request method and request URL 
    request.open("GET", "/recipesgrid", true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        recipeArray = JSON.parse(request.responseText);
        dynamicRecipeInsert(recipeArray);
    }

    //Send request to web server
    request.send();
}

function dynamicRecipeInsert(recipeArray) {

    //Retrieve dynamic data container via id
    var homeRestoGrid = document.getElementById("RestoGrid");

    //Loop through array elements and perform DOM manipulation to insert the dynamic data into innerHTML
    for (let i = 0; i < recipeArray.length; i++) {
        console.log(recipeArray[i]);
        var tempRecipe = recipeArray[i];

        homeRestoGrid.innerHTML += "<a class='restogrid-item' href='recipecard.html' onclick='saveRecipeID(" + tempRecipe.RecipeID + ")' oncontextmenu='saveRecipeID(" + tempRecipe.RecipeID + ")'><img class='recipeimg' src=" + tempRecipe.GridImg + "><h4 class='gridheading'>" + tempRecipe.RecipeName + "</h4><p style='line-height: 20px;'>" + tempRecipe.ShortDesc + "</p><br><br></a>";
    }
}

//Check for logged in user before changing window location
function userValidation() {
    //Retrieve user's details from localStorage
    var username = window.localStorage.getItem("UserName");
    var userid = window.localStorage.getItem("UserID");

    //Retrieve container by id
    var submitbutton = document.getElementById('submitbutton');

     //Check if user details are present
    if (username != null && userid != null) {
        submitbutton.href = 'submitrecipe.html'; //Change window locations
    } else {
        alert("You need to be logged in to submit a recipe.");
        submitbutton.href = 'userlogin.html'; //Change window locations
    }
}

//Save recipeID to use in recipecard.html
function saveRecipeID(recipeID) {
    window.localStorage.setItem('recipeID', recipeID);
}