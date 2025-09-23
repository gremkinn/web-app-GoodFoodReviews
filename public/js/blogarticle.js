
//Load article using postID saved in localStorage from blog.html
function loadArticle() {
    checkUserHome()

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var articleArray = [];
    var ID = window.localStorage.getItem('postID');

    //Set the request method and request URL 
    request.open("GET", '/blogarticle?id=' + ID, true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        articleArray = JSON.parse(request.responseText);
        dynamicInsert(articleArray);
    }

    //Send request to web server
    request.send();
}

//Insert data retrieved from database
function dynamicInsert(articleArray) {

    var tempArticle = articleArray[0]; //Store 1st array's key-value pairs.

    //Retrieve img container and set img src
    var articleImg = document.getElementById("articleBanner");
    articleImg.src = tempArticle.MainImg;

    //Retrieve article title and insert into container
    var articleTitle = document.getElementById("articleHeader");
    articleTitle.innerHTML = tempArticle.PostTitle;

    //Retrieve article date and insert into container
    var articleDate = document.getElementById("articleDate");
    var year = tempArticle.Date.slice(0, 4);
    var month = tempArticle.Date.slice(5, 7);
    var day = tempArticle.Date.slice(8, 10);
    articleDate.innerHTML = "&ensp;" + day + "-" + month + "-" + year;

    //Retrieve article read time and insert into container
    var articleReadTime = document.getElementById("articleReadTime");
    articleReadTime.innerHTML = "&ensp;" + tempArticle.ReadTime + " min read";

    //Retrieve article body and insert into container
    var articleBody = document.getElementById("articleBody");
    articleBody.innerHTML = tempArticle.LongDesc;
}