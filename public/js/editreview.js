//Change radio button's image upon selection so that the visual matches the numeric value of the buttons
function radioChange() {

    var radio1 = document.getElementById('rr1');
    var buttonImg1 = document.getElementById('rr1img');
    var radio2 = document.getElementById('rr2');
    var buttonImg2 = document.getElementById('rr2img');
    var radio3 = document.getElementById('rr3');
    var buttonImg3 = document.getElementById('rr3img');
    var radio4 = document.getElementById('rr4');
    var buttonImg4 = document.getElementById('rr4img');
    var radio5 = document.getElementById('rr5');
    var buttonImg5 = document.getElementById('rr5img');

    if (radio1.checked) {
        buttonImg1.src = "images/ratingradio/startchk.png";
        buttonImg2.src = "images/ratingradio/mid.png";
        buttonImg3.src = "images/ratingradio/mid.png";
        buttonImg4.src = "images/ratingradio/mid.png";
        buttonImg5.src = "images/ratingradio/end.png";
    }
    else if (radio2.checked) {
        buttonImg1.src = "images/ratingradio/startchk.png";
        buttonImg2.src = "images/ratingradio/midchk.png";
        buttonImg3.src = "images/ratingradio/mid.png";
        buttonImg4.src = "images/ratingradio/mid.png";
        buttonImg5.src = "images/ratingradio/end.png";
    }
    else if (radio3.checked) {
        buttonImg1.src = "images/ratingradio/startchk.png";
        buttonImg2.src = "images/ratingradio/midchk.png";
        buttonImg3.src = "images/ratingradio/midchk.png";
        buttonImg4.src = "images/ratingradio/mid.png";
        buttonImg5.src = "images/ratingradio/end.png";
    }
    else if (radio4.checked) {
        buttonImg1.src = "images/ratingradio/startchk.png";
        buttonImg2.src = "images/ratingradio/midchk.png";
        buttonImg3.src = "images/ratingradio/midchk.png";
        buttonImg4.src = "images/ratingradio/midchk.png";
        buttonImg5.src = "images/ratingradio/end.png";
    }
    else if (radio5.checked) {
        buttonImg1.src = "images/ratingradio/startchk.png";
        buttonImg2.src = "images/ratingradio/midchk.png";
        buttonImg3.src = "images/ratingradio/midchk.png";
        buttonImg4.src = "images/ratingradio/midchk.png";
        buttonImg5.src = "images/ratingradio/endchk.png";
    }
    else {
        buttonImg1.src = "images/ratingradio/start.png";
        buttonImg2.src = "images/ratingradio/mid.png";
        buttonImg3.src = "images/ratingradio/mid.png";
        buttonImg4.src = "images/ratingradio/mid.png";
        buttonImg5.src = "images/ratingradio/end.png";
    }
};

//Retrieve selected review's details from database and load into form
function editReviewLoad() {

    checkUserHome()//Check for logged in user

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var reviewArray = [];
    var ID = window.localStorage.getItem('reviewID');

    //Set the request method and request URL 
    request.open("GET", '/editreview?id=' + ID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        reviewArray = JSON.parse(request.responseText);
        dynamicReviewInsert(reviewArray);
    }

    //Send request to web server
    request.send();
}

function dynamicReviewInsert(reviewArray) {

    var reviewDetails = reviewArray[0]; //Store 1st array's key-value pairs.

    //Retrieve containers by id and insert data from array
    document.getElementById('rname').value = reviewDetails.Name;

    var ratingRadio = document.getElementsByName('ratingRadio');
    for (i = 0; i < ratingRadio.length; i++) {
        if (ratingRadio[i].value == reviewDetails.U_rating) {
            ratingRadio[i].checked = true;
            radioChange();
            break;
        }
    }

    document.getElementById('review').value = reviewDetails.Review;
}

//Save/overwrite review changes to the database
function saveReviewUpdate() {

    //Check that input field contains value
    if (document.getElementById('review').value != null) {
        //Define user review data to be sent in an object
        var data = new Object;

        //Retrieve user input
        var ratingRadio = document.getElementsByName('ratingRadio');
        for (i = 0; i < ratingRadio.length; i++) {
            if (ratingRadio[i].checked) {
                data.user_rating = ratingRadio[i].value;
                break;
            }
        }

        //Check that input contains value, & assign value if required
        if (data.user_rating == null) {
            data.user_rating = 0;
        }

        //Retrieve containers by id and insert data from array
        data.user_review = document.getElementById('review').value;
        data.review_id = window.localStorage.getItem('reviewID');

        //Convert the data to a JSON string
        var jsonData = JSON.stringify(data);

        //Initialize a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        //Set the request method and request URL 
        request.open("POST", '/updatereview', true);

        //Set request header type as json
        request.setRequestHeader("Content-Type", "application/json");

        //Callback function when data is returned from the web server
        request.onload = function () {
            //Code to carry out after request is completed.
            alert('Your review has been successfully updated!');
            window.location.replace('/userprofile.html');
        }

        //Send request to web server
        request.send(jsonData);
    }
    else { //Inform user of missing value in input field
        alert("Please check that you have entered your review.");
    }
}