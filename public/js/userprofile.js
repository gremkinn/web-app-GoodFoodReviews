//Retrieve logged user's id and populate page with their data
function loadUserProfile() {

    checkUserHome();

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var userArray = [];
    var ID = window.localStorage.getItem('UserID');

    //Set the request method and request URL 
    request.open("GET", '/userprofile?id=' + ID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        userArray = JSON.parse(request.responseText);
        dynamicInsertUProfile(userArray);
    }

    //Send request to web server
    request.send();
};

function dynamicInsertUProfile(userArray) {

    //Retrieve dynamic data container via id
    var userProfile = document.getElementById("userProfileDiv");
    var reviewGrid = document.getElementById("reviewgrid");
    var profileTitle = document.getElementById("profileTitle");

    var tempArray = userArray[0]; //Store 1st array's key-value pairs.
    console.log(tempArray);

    var LastName;
    var ShortBio;

    profileTitle.innerHTML = "Hello " + tempArray.FirstName + "!";

    if (tempArray.LastName != null) {
        LastName = tempArray.LastName;
    }
    else {
        LastName = "";
    }

    if (tempArray.ShortBio != null) {
        ShortBio = tempArray.ShortBio;
    }
    else {
        ShortBio = "Edit your profile & introduce yourself in a short biography.";
    }

    userProfile.innerHTML = "<img src='images/disp_pic/user3.png' style='width: 100%;border-radius: 30px;'><br><span class='bodytext' style='color: white;font-size: x-large;'><img src='images/user_white.png' style='width:12%;margin-bottom: 6px;margin-right: 8px;'>" + tempArray.FirstName + " " + LastName + "</span><p class='bodytext' style='color:white'>" + tempArray.Email + "<br><br>" + ShortBio + "</p>";

    

    for (let i = 0; i < userArray.length; i++) {
        var tempUserProfile = userArray[i];

        if(tempUserProfile.ReviewID != null) {

        var year = tempUserProfile.Date.slice(0, 4);
        var month = tempUserProfile.Date.slice(5, 7);
        var day = tempUserProfile.Date.slice(8, 10);

        //Perform DOM manipulation to insert the dynamic data into innerHTML by looping through the arrays. (Reviews)
        reviewGrid.innerHTML += "<div><p style = 'font-size:larger;color: white;margin-bottom: 10px;' class='bodytext'>" + tempUserProfile.Name + "</p><img src='" + tempUserProfile.Img + "' style='width:110px;'><span style='color: white;' class='bodytext'>&nbsp;<i>" + day + "-" + month + "-" + year + "</i></span><a href='editreview.html' onclick='saveReviewID(" + tempUserProfile.ReviewID + ")'><img class='reviewEdits' src='images/edit.png' style='width:3.8%;margin-right: 1%;margin-left: 60%;'></a><a href='userprofile.html' onclick='deleteReview(" + tempUserProfile.ReviewID + ")'><img class='reviewEdits' src='images/delete.png' style='width:3%'></a> <br><p class='bodytext' style='background-color: #ffeace;padding: 10px 15px;width: 100%;margin-top: 2%;'>" + tempUserProfile.Review + "</p></div>"
    } else {
        reviewGrid.innerHTML = "<br><br><br><br><br><p class='bodytext' style='font-size:large;color: white;text-align:center;'>Check out the restaurants on our website! If you've visited them before, leave a review to share your experiences with other users.</p>"
    }
    
}}

//Link change password button
function PWChangeLink() {
    window.location.replace('/passwordchange.html');
}

//Link edit profile button
function editProfileLink() {
    window.location.replace('/editprofile.html');
}

//Link log out button
function LogOut() {
    window.localStorage.removeItem("UserName");
    window.localStorage.removeItem("UserID");
    alert("You have successfully logged out.")
}

//Delete user's review upon confirmation
function deleteReview(reviewID) {
    var status = window.confirm("Are you sure about deleting your review?");
    if(status) {

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Set the request method and request URL 
    request.open("DELETE", '/deletereview?id=' + reviewID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        alert('Your review has been deleted.')
    }

    //Send request to web server
    request.send(); }
    else {
        //Do nothing
    }
}

//Save reviewID to use on editreview.html
function saveReviewID(reviewID) {
    window.localStorage.setItem('reviewID',reviewID);
}


