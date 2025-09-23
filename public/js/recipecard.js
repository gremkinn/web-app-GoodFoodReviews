
//Load selected recipe using id saved in localStorage
function loadRecipe() {
    checkUserHome()

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var recipeArray = [];
    var ID = window.localStorage.getItem('recipeID');

    //Set the request method and request URL 
    request.open("GET", '/recipe?id=' + ID, true);

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

    var tempRecipe = recipeArray[0]; //Store 1st array's key-value pairs.

    //Retrieve recipe name container via id & insert data
    var recipeTitle = document.getElementById("recipeTitle");
    recipeTitle.innerHTML = tempRecipe.RecipeName;

     //Process author's name values.
     if (tempRecipe.UserID == null) {
        var authorName = "Anonymous";
    } else {
        if (tempRecipe.Lastname != null) {
            authorName = tempRecipe.FirstName + " " + tempRecipe.LastName;
        }
        else {
            authorName = tempRecipe.FirstName;
        }
    }

    //Retrieve recipe details container via id & insert data
    var recipeDesc = document.getElementById("recipeDesc");

    recipeDesc.innerHTML = tempRecipe.LongDesc + "<br><br><span style='color: #ffeace;font-size: medium'>Prep Time: " + tempRecipe.PrepTime + "minutes | Total Time: " + tempRecipe.TotalTime + "minutes |<br>Servings: " + tempRecipe.Servings + " people | Calories: " + tempRecipe.Calories + "kcal<br>Author: " + authorName + "</span>";

    //Retrieve ingredients container via id & insert data
    var ingredients = document.getElementById("ingredients");

    //Process ingredients values using string split.
    var ingredientsArray = tempRecipe.Ingredients.split('&');

    //Insert ingredients by looping through the array, into selected container
    for (let i = 0; i < ingredientsArray.length; i++) {
        ingredients.innerHTML += "<label class='container'><input type='checkbox'><span class='checkmark'>" + ingredientsArray[i] + "</span></label>"
    }

    //Retrieve instructions container via id & insert data
    var instructions = document.getElementById("instructions");

    //Process instructions values using string split.
    var instructionsArray = tempRecipe.Instructions.split('&');

    //Insert instructions by looping through the array, into selected container
    for (let i = 0; i < instructionsArray.length; i++) {
        if (i != instructionsArray.length - 1) {
            instructions.innerHTML += instructionsArray[i] + "<br><br>";
        }
        else {
            instructions.innerHTML += instructionsArray[i];
        }
    }

    //Retrieve image container via id & insert data
    var recipeImg = document.getElementById("recipeImg");
    recipeImg.src = tempRecipe.GridImg;

}