//Retrieve user's input and send to database
function submitRecipe() {

    //Define user review data to be sent in an object
    var data = new Object;

    //Retrieve user input
    var authorRadio = document.getElementsByName('authorCredit');
    for (i = 0; i < authorRadio.length; i++) {
        if (authorRadio[i].checked) {
            data.author_credit = authorRadio[i].value;
            break;
        }
    }

    data.userid = window.localStorage.getItem("UserID");
    data.recipe_name = document.getElementById('rname').value;
    data.recipe_desc = document.getElementById('recipe_desc').value;
    data.recipe = document.getElementById('recipe').value;

    //Check if any variables are null.
    var data_count;
    for (var key in data) {
        if (key == null) {
            data_count += 1;
        }
    }

    //Send data to database only if all fields are filled
    if (data_count == 0) {

        //Convert the data to a JSON string
        var jsonData = JSON.stringify(data);

        //Initialize a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        //Set the request method and request URL 
        request.open("POST", '/submitrecipe', true);

        //Set request header type as json
        request.setRequestHeader("Content-Type", "application/json");

        //Callback function when data is returned from the web server
        request.onload = function () {
            //Code to carry out after request is completed.
            alert('Your recipe has been successfully submitted. Our team will vet your submission and contact you with suggested changes & improvements, if any! Please allow us 3-5 working days to get back to you.');
            window.location.replace('/recipes.html');
        }

        //Send request to web server
        request.send(jsonData);
    }
    else {
        alert('Please make sure you have filled out all the fields.')
    }
}