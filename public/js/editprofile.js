
//Function to change the main display on mouseover for user interaction
function imageChange() {
    var formImage = document.getElementById("formImage");
    if (formImage.src.includes('images/form1.png')) {
        formImage.src = 'images/form2.png';
    } else if (formImage.src.includes('images/form2.png')) {
        formImage.src = 'images/form3.png';
    } else {
        formImage.src = 'images/form1.png';
    }

};

//Function hide/show password field
function passwordToggle() {
    var pwButton = document.getElementById("pwToggle");
    var pwInputField = document.getElementById("password");

    if (pwInputField.type == 'password') {
        pwInputField.type = "text";
        pwButton.src = 'images/pwshow.png';
    }
    else {
        pwInputField.type = "password";
        pwButton.src = 'images/pwhide.png';
    }
}

//Function to load current user's profile details into a form for editting
function loadUserProfile() {
    checkUserHome()

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var userArray = [];
    var ID = window.localStorage.getItem('UserID');

    //Set the request method and request URL 
    request.open("GET", '/editprofile?id=' + ID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        userArray = JSON.parse(request.responseText);
        window.sessionStorage.setItem('UserPassword',userArray[0].Password)
        dynamicProfileInsert(userArray);
    }

    //Send request to web server
    request.send();
}

function dynamicProfileInsert(userArray) {
    console.log(userArray[0]);
    var userDetails = userArray[0]; //Store 1st array's key-value pairs.

    document.getElementById('fname').value = userDetails.FirstName;

    if (userDetails.LastName != null) {
        document.getElementById('lname').value = userDetails.LastName;
    }

    document.getElementById('email').value = userDetails.Email;

    if (userDetails.ShortBio != null) {
        document.getElementById('bio').value = userDetails.ShortBio;
    }
}

//Function to save/overwrite user's profile details in the databse
function saveProfileUpdates() {
    var userPW = window.sessionStorage.getItem('UserPassword');

    if (document.getElementById('password').value == userPW) {

        var first_name = document.getElementById('fname').value;
        var last_name = document.getElementById('lname').value;
        var email = document.getElementById('email').value;
        var bio = document.getElementById('bio').value;
    var user_id = window.localStorage.getItem('UserID');

    //Define user review data to be sent in an object
    var data = new Object;
    data.first_name = first_name;
    data.last_name = last_name;
    data.email = email;
    data.bio = bio;
    data.userid = user_id;

    //Convert the data to a JSON string
    var jsonData = JSON.stringify(data);

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Set the request method and request URL 
    request.open("POST", '/saveprofile', true);

    //Set request header type as json
    request.setRequestHeader("Content-Type", "application/json");

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Code to carry out after request is completed.
        alert('Your profile has been successfully updated!');
        window.location.replace('/userprofile.html');
    }

    //Send request to web server
    request.send(jsonData);
    } else {
        alert('You have entered an incorrect password. Please try again.')
    }
}

//Delete user's password on event
function deletePassword() {
    window.sessionStorage.removeItem('UserPassword');
}