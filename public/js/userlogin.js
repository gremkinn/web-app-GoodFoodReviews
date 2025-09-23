
//Function to change form image for user interactivity
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

//Show/hide password fields
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

//Retrieve user's login details for database and compare against user input before logging them in
function userLogin() {

    //Retrieve user input
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == '' || password == '') {

        alert("Please enter your login details.")

    } else {

        //Initialize a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        //Define user login data to be sent in an object
        var data = new Object;
        data.email = email;
        data.password = password;

        //Convert the data to a JSON string
        var jsonData = JSON.stringify(data);

        //Set the request method and request URL 
        request.open("POST", "/userlogin", true);

        //Set request header type as json
        request.setRequestHeader("Content-Type", "application/json");

        //Initialize array to store user's login details if successful.
        var userDetails = [];

        //Callback function when data is returned from the web server
        request.onload = function () {

            userDetails = JSON.parse(request.responseText);

            if (userDetails.length == 1) {
                //Actions to carry out on succesful respone.
                alert("You have successfully logged in.");
                window.localStorage.setItem("UserName", userDetails[0].FirstName);
                window.localStorage.setItem("UserID", userDetails[0].UserID);
                window.location.replace('/home.html');
            } else {
                //Display alert if no user found.
                alert("Invalid login details.Please try again.")
            }
        }
    }
    //Send request to web server
    request.send(jsonData);
}





