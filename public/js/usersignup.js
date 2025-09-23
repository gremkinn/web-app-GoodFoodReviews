//Change form image for user interactivity 
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

//Hide/show password fields
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

//Submit new user's details to database
function newUser() {
    if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
        //Retrieve user input and define new object to send data
        var data = new Object;
        data.fname = document.getElementById('fname').value;
        data.lname = document.getElementById('lname').value;

        var genderRadio = document.getElementsByName('genderRadio');
        for (i = 0; i < genderRadio.length; i++) {
            if (genderRadio[i].checked) {
                data.gender = genderRadio[i].value;
                break;
            }
        }

        data.email = document.getElementById('email').value;
        data.password = document.getElementById('password').value;

        //Convert the data to a JSON string
        var jsonData = JSON.stringify(data);

        //Initialize a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        //Set the request method and request URL 
        request.open("POST", '/usersignup', true);

        //Set request header type as json
        request.setRequestHeader("Content-Type", "application/json");

        //Callback function when data is returned from the web server
        request.onload = function () {
            var response = JSON.parse(request.responseText);

            if (response.status === "success") {
                alert('Your account has been successfully created. Try logging in now!');
                window.location.replace('/userlogin.html');
            } else if (response.status === "exists") {
                alert("User already exists. Log in or try with different credentials.")
                window.location.replace('/usersignup.html');
            }
        }


        //Send request to web server
        request.send(jsonData);

    } else {
        alert('Your password does not match. Please try again.')
    }
}

