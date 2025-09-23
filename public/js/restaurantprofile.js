
//Functions to load restaurant details & reviews.
function restoProfile() {
    checkUserHome()

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var restoArray = [];
    var ID = window.localStorage.getItem('restoID');

    //Set the request method and request URL 
    request.open("GET", '/restaurantprofile?id=' + ID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        restoArray = JSON.parse(request.responseText);
        dynamicInsert(restoArray);
    }

    //Send request to web server
    request.send();
}

function dynamicInsert(restoArray) {

    //Retrieve dynamic data container via id
    var restoProfile = document.getElementById("loadResto");
    var restoReviewsDiv = document.getElementById("reviewgrid");

    var tempResto = restoArray[0]; //Store 1st array's key-value pairs.

    //Perform DOM manipulation to insert the dynamic data into innerHTML (Restaurant's details)
    restoProfile.innerHTML += "<div id='bannerimage'><img src='" + tempResto.BannerImg + "'></div><br><div id='restoContent'><div><img id='logo' src='" + tempResto.LogoImg + "'></div><div style='margin-top: 10px;'><h2 class='subheading' style='color: white;text-shadow: 5px 5px 5px black;'>" + tempResto.Name + "</h2><br><img style='width: 100px;' src='images/ratings/rating-0" + tempResto.R_Rating + ".png'>&nbsp;&nbsp;<span class='bodytext'>" + tempResto.R_Rating + " stars</span><br><span class='bodytext'>" + tempResto.Symbol + "." + tempResto.C_Name + " | Opening Hours: " + tempResto.OpeningHours + " | " + tempResto.Address + "</span></div></div><br><div style='width: 70%;margin: auto;'><h2 class='subheading' style='font-size: 35px;display: inline;'>About</h2>&nbsp;&nbsp;<span class='bodytext'>" + tempResto.LongDescription + "</span><div>";

    window.localStorage.setItem("RestaurantName", tempResto.Name); //Store restaurant's name in local storage.

    for (let i = 0; i < restoArray.length; i++) {
        var tempRestoReviews = restoArray[i];

        var year = tempRestoReviews.Date.slice(0, 4);
        var month = tempRestoReviews.Date.slice(5, 7);
        var day = tempRestoReviews.Date.slice(8, 10)

        //Perform DOM manipulation to insert the dynamic data into innerHTML by looping through the arrays. (Reviews)
        restoReviewsDiv.innerHTML += "<div class='reviewgrid_item'><img src='images/user.png' style='width: 30px;'>&nbsp;&nbsp;<span style='font-size:larger;' class='bodytext'>" + tempRestoReviews.FirstName + "</span><br><img src='images/ratings/rating-0" + tempRestoReviews.U_Rating + ".png' style='width:125px;padding-top:10px;'>&nbsp;&nbsp;<span style='padding-left:285px;' class='bodytext'><i>" + day + "-" + month + "-" + year + "</i></span><br><br><p class='bodytext' style='background-color: #ffeace;padding: 10px 15px;'>" + tempRestoReviews.Review + "</p></div>";
    }

}

//Function to check for logged in user before changing window location
function userValidation() {
    //Retrieve user's details from localStorage
    var username = window.localStorage.getItem("UserName");
    var userid = window.localStorage.getItem("UserID");

    //Retrieve container by id
    var reviewbutton = document.getElementById('reviewbutton');

    //Check if user details are present
    if (username != null && userid != null) {
        reviewbutton.href = 'writereview.html'; //Change window location
    } else {
        alert("You need to be logged in to leave a review.");
        reviewbutton.href = 'userlogin.html'; //Change window locations
    }
}
