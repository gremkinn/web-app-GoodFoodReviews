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
function passwordToggle(buttonID, inputID) {
    var pwButton = document.getElementById(buttonID);
    var pwInputField = document.getElementById(inputID);

    if (pwInputField.type == 'password') {
        pwInputField.type = "text";
        pwButton.src = 'images/pwshow.png';
    }
    else {
        pwInputField.type = "password";
        pwButton.src = 'images/pwhide.png';
    }
}

//Retrieve user's password from database to use for validation
function loadPassword() {
    checkUserHome()

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var userArray = [];
    var ID = window.localStorage.getItem('UserID');

    //Set the request method and request URL 
    request.open("GET", '/retrievepassword?id=' + ID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        userArray = JSON.parse(request.responseText);
        window.sessionStorage.setItem('UserPassword', userArray[0].Password)
    }

    //Send request to web server
    request.send();
}

//Check if current password (retrieved from database) & user's new password match before updating it in the database
function checkUpdatePW() {
    if (document.getElementById('oldpassword').value == window.sessionStorage.getItem('UserPassword')) {
        if (document.getElementById('newpassword').value == document.getElementById('confirmpassword').value) {

            //Retrieve values to be sent
            var newpassword = document.getElementById('newpassword').value;
            var user_id = window.localStorage.getItem('UserID');
            console.log(newpassword);

            //Define user review data to be sent in an object
            var data = new Object;
            data.password = newpassword;
            data.user_id = user_id;

            //Convert the data to a JSON string
            var jsonData = JSON.stringify(data);

            //Initialize a new XMLHttpRequest object
            var request = new XMLHttpRequest();

            //Set the request method and request URL 
            request.open("POST", '/savepassword', true);

            //Set request header type as json
            request.setRequestHeader("Content-Type", "application/json");

            //Callback function when data is returned from the web server
            request.onload = function () {
                //Code to carry out after request is completed.
                alert('Your password has been successfully updated!');
                window.location.replace('/userprofile.html');
            }

            //Send request to web server
            request.send(jsonData);

        } else {
            alert('Please check that you have entered your new password correctly.')
        }

    } else {
        alert('Please enter your current password correctly.')
    }
}

//Delete user's password from database
function deletePassword() {
    window.sessionStorage.removeItem('UserPassword');
}
