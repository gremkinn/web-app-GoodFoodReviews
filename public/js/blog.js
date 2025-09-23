//Function to load preview of all blog articles onto page
function loadArticles() {

    checkUserHome()//Check for logged in user

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Initialize array to store retrieved data
    var blogArray = [];

    //Set the request method and request URL 
    request.open("GET", '/blog', true);

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Retrieve response and store it in an array
        blogArray = JSON.parse(request.responseText);
        dynamicInsert(blogArray);
    }

    //Send request to web server
    request.send();
}

function dynamicInsert(blogArray) {

    //Retrieve dynamic data container via id
    var articleList = document.getElementById("articleList");

    //Loop through array elements and perform DOM manipulation to insert the dynamic data into innerHTML
    for (let i = 0; i < blogArray.length; i++) {
        console.log(blogArray[i]);
        var tempArticle = blogArray[i];

        var year = tempArticle.Date.slice(0, 4);
        var month = tempArticle.Date.slice(5, 7);
        var day = tempArticle.Date.slice(8, 10)

        if (i != blogArray.length - 1) {

            articleList.innerHTML += "<a href='blogarticle.html' onclick='saveBlogID(" + tempArticle.PostID + ")' class='articlePreview'><div><img src=" + tempArticle.ColumnImg + " style='width:25%;'><div><p class='bodytext'>" + day + "-" + month + "-" + year + "</p><br><h4 class='subheading' style='text-decoration: underline;font-size: larger;'>" + tempArticle.PostTitle + "</h4><p class='bodytext' style='font-size: large;'>" + tempArticle.ShortDesc + "</p></div></div></a><br><div class='blogDiv'></div><br>";
            
        } else { //Code for last element in the array without the final divider
            articleList.innerHTML += "<a href='blogarticle.html' onclick='saveBlogID(" + tempArticle.PostID + ")' class='articlePreview'><div><img src=" + tempArticle.ColumnImg + " style='width:25%;'><div><p class='bodytext'>" + day + "-" + month + "-" + year + "</p><br><h4 class='subheading' style='text-decoration: underline;font-size: larger;'>" + tempArticle.PostTitle + "</h4><p class='bodytext' style='font-size: large;'>" + tempArticle.ShortDesc + "</p></div></div></a><br>";
        }
    }
}

//Function to save postID for retrieval on blogarticle.html
function saveBlogID(postID) {
    window.localStorage.setItem('postID',postID);
}