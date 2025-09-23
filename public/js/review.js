
//Change visual of radio buttons to match selected value
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

//Load selected restaurant using ID from localStorage
function loadRestaurantName() {
    checkUserHome();

    var restoName = document.getElementById("rname"); //Retrieve input field by ID.
    restoName.value = window.localStorage.getItem('RestaurantName'); //Change input's value to restaurant's name retrieved from localstorage.
};

//Submit review to database
function insertReview() {

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

        if (data.user_rating == null) {
            data.user_rating = 0;
        }

        data.user_review = document.getElementById('review').value;
        data.user_id = window.localStorage.getItem('UserID');
        data.restaurant_id = window.localStorage.getItem('restoID');

        //Convert the data to a JSON string
        var jsonData = JSON.stringify(data);

        //Initialize a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        //Set the request method and request URL 
        request.open("POST", '/writereview', true);

        //Set request header type as json
        request.setRequestHeader("Content-Type", "application/json");

        //Callback function when data is returned from the web server
        request.onload = function () {
            //Code to carry out after request is completed.
            alert('Your review has been successfully posted! Edit or delete it from your profile.');
            window.location.replace('/userprofile.html');
        }

        //Send request to web server
        request.send(jsonData);
    }
    else {
        alert("Please check that you have entered your review.");
    }
}



