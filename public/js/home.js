
//Functions to retrieve details of 3 random restaurants from database and insert them into the page
function homeRestaurants() {

    checkUserHome();

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var restaurantsArray = [];

    //Set the request method and request URL 
    request.open("GET", "/homerestaurants", true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        restaurantsArray = JSON.parse(request.responseText);
        dynamicInsertHome(restaurantsArray);
    }

    //Send request to web server
    request.send();
}

function dynamicInsertHome(restaurantsArray) {

    //Retrieve dynamic data container via id
    var homeRestoGrid = document.getElementById("homeRestoGrid");

    //Loop through array elements and perform DOM manipulation to insert the dynamic data into innerHTML
    for (let i = 0; i <= restaurantsArray.length; i++) {
        console.log(restaurantsArray[i]);
        var tempRestaurant = restaurantsArray[i];

        homeRestoGrid.innerHTML += "<div class='restogrid-item'><img class='gridimg' src=" + tempRestaurant.GridImg + "><h4 class='gridheading'>" + tempRestaurant.Name + "</h4><p>" + tempRestaurant.ShortDescription + "</p><img class='rating' src=" + tempRestaurant.Img + "><br><br><a href='restaurantprofile.html' onClick='saveRestoID(" + tempRestaurant.RestaurantID + ")' onContextMenu ='saveRestoID(" + tempRestaurant.RestaurantID + ")'>View</a></div>";
    }
}

//Save restaurantID to use on restaurantprofile.html
function saveRestoID(restoID) {
    window.localStorage.setItem("restoID", restoID);
}


