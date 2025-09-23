"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8010;

var startPage = "home.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});

var db = require("./db-connection");

//App Routes

//Load 3 random restaurants (home.html)
app.route('/homerestaurants').get(
    function (request, response) {

        //SELECT query to retrieve 3 random restaurants.
        var sql = "SELECT * FROM restaurant INNER JOIN ratingimg ON restaurant.r_rating = ratingimg.Rating ORDER BY RAND() LIMIT 3";

        //Perform query to database from web server
        db.query(sql, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
);

//Load all restaurants into grid (restaurants.html)
app.route('/restaurantsgrid').get(
    function (request, response) {

        //SELECT query to retrieve 3 random restaurants.
        var sql = "SELECT restaurant.RestaurantID,restaurant.Name,restaurant.GridImg,restaurant.ShortDescription,ratingimg.Img FROM restaurant INNER JOIN ratingimg ON restaurant.r_rating = ratingimg.Rating";

        //Perform query to database from web server
        db.query(sql, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
);

//Load selected restaurant (restaurantprofile.html)
app.route('/restaurantprofile').get(
    function (request, response) {

        var restoID = request.query.id; //Retrieve restaurant id from url.

        //SELECT query to retrieve details of specified restaurant.
        var sql = "SELECT res.BannerImg,res.LogoImg,res.Name,res.R_Rating,c.C_Name,pr.Symbol,res.OpeningHours,res.Address,res.LongDescription,user.FirstName,rev.Date,rev.Review,rev.U_Rating FROM restaurant res INNER JOIN ratingimg ra ON ra.Rating = R_Rating INNER JOIN review rev USING (RestaurantID) INNER JOIN user USING (UserID) INNER JOIN cuisine c USING (CuisineID) INNER JOIN pricerange pr ON pr.RangeID = res.PriceRangeID WHERE RestaurantID = ?";

        //Perform query to database from web server
        db.query(sql, [restoID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
);

//Retrieve user's account details (userlogin.html)
app.route("/userlogin").post(
    function (request, response) {
        //SELECT query to retrieve user's login details.
        var sql = "SELECT UserID,FirstName,Email,Password FROM user WHERE Email = ? AND Password = ? ";

        //Prepare parameters to parse into sql statement.
        var params = [request.body.email, request.body.password];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Retrieve user's profile details (userprofile.html)
app.route('/userprofile').get(
    function (request, response) {
        var userID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT u.FirstName,u.LastName,u.Email,u.ShortBio,rev.Date,rev.ReviewID,rev.Review,rev.U_Rating,res.Name,ra.Img,u.Password FROM user u LEFT JOIN review rev USING (UserID) LEFT JOIN restaurant res USING (restaurantID) LEFT JOIN ratingimg ra ON rev.U_Rating = ra.Rating WHERE u.UserID = ? ";

        //Perform query to database from web server
        db.query(sql, [userID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Delete selected review (userprofile.html)
app.route('/deletereview').delete(
    function (request, response) {
        var reviewID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's details and their reviews.
        var sql = "DELETE FROM review WHERE ReviewID = ?";

        //Perform query to database from web server
        db.query(sql, [reviewID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    })

//Retrieve user password (userprofile.html)
app.route('/retrievepassword').get(
    function (request, response) {
        var userID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's password.
        var sql = "SELECT Password FROM user WHERE UserID = ?";

        //Perform query to database from web server
        db.query(sql, [userID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Load selected restaurant's name (writereview.html)
app.route('/writereview').get(
    function (request, response) {

        var restoID = request.query.id; //Retrieve restaurant id from url.

        //SELECT query to retrieve name of specified restaurant.
        var sql = "SELECT RestaurantID,Name FROM restaurant WHERE RestaurantID = ? ";

        //Perform query to database from web server
        db.query(sql, [restoID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
);

//Insert new review into database (writereview.html)
app.route("/writereview").post(
    function (request, response) {

        //INSERT query to save review's details into database. 
        var sql = "INSERT INTO review (RestaurantID, Review, UserID, U_Rating) VALUES ( ? , ? , ? , ? )";

        //Prepare parameters to parse into sql statement.
        var params = [Number(request.body.restaurant_id), request.body.user_review, Number(request.body.user_id), Number(request.body.user_rating)];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Retrieve existing review's details (editreview.html)
app.route('/editreview').get(
    function (request, response) {
        var reviewID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT ReviewID,Review,U_rating,Name FROM review INNER JOIN Restaurant USING (RestaurantID) WHERE ReviewID = ? ";

        //Perform query to database from web server
        db.query(sql, [reviewID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Save changes to review (editreview.html)
app.route("/updatereview").post(
    function (request, response) {

        //INSERT query to save review's details into database. 
        var sql = "UPDATE review SET U_Rating = ? , Review = ? WHERE ReviewID = ? ";

        //Prepare parameters to parse into sql statement.
        var params = [Number(request.body.user_rating), request.body.user_review, Number(request.body.review_id)];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Retrieve user's profile details (editprofile.html)
app.route('/editprofile').get(
    function (request, response) {
        var userID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT * FROM user WHERE UserID = ?";

        //Perform query to database from web server
        db.query(sql, [userID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Save changes of user's profile to database (editprofile.html)
app.route("/saveprofile").post(
    function (request, response) {

        //INSERT query to save review's details into database. 
        var sql = "UPDATE user SET FirstName = ? , LastName = ? , Email = ? ,ShortBio = ? WHERE UserID = ? ";

        //Prepare parameters to parse into sql statement.
        var params = [request.body.first_name, request.body.last_name, request.body.email, request.body.bio, Number(request.body.userid)];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Save changes to password into database (changepassword.html)
app.route("/savepassword").post(
    function (request, response) {

        //INSERT query to save review's details into database. 
        var sql = "UPDATE user SET Password = ? WHERE UserID = ? ";

        //Prepare parameters to parse into sql statement.
        var params = [request.body.password, Number(request.body.user_id)];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Insert new enquiry into database (about.html)
app.route("/enquiry").post(
    function (request, response) {

        //INSERT query to save review's details into database. 
        var sql = "INSERT INTO enquiry(Name, Email, ContactNumber, Enquiry) VALUES ( ? , ? , ? , ? )";

        //Prepare parameters to parse into sql statement.
        var params = [request.body.enquiryName, request.body.email, Number(request.body.telnum), request.body.enquiry];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Insert new user details into database (usersignup.html)
app.route("/usersignup").post(
    function (request, response) {

        //Select query to check for existing user. 
        var sql = "SELECT * FROM user WHERE email = ? ";

        //Prepare parameters to parse into sql statement.
        var params_email = [request.body.email];

        //Perform query to database from web server
        db.query(sql, params_email, function (error, result) {
            if (result.length == 0) {

                //INSERT query to save review's details into database. 
                var sql_2 = "INSERT INTO user (FirstName, LastName, Email, Password, Gender) VALUES ( ? , ? , ? , ? , ? )";

                //Prepare parameters to parse into sql statement.
                var params = [request.body.fname, request.body.lname, request.body.email, request.body.password, request.body.gender];

                db.query(sql_2, params, function (error_2, result_2) {
                    if (error_2) {
                        throw error;
                    } else {
                        //Return result as json
                        response.json({ status: "success", message: "User created successfully", result: result_2 });
                    }
                })

            } else {
                //Return result as json
                response.json({ status: "exists", message: "User already exists", result: result });;
            }
        });
    }
)

//Retrieve all recipes (recipes.html)
app.route('/recipesgrid').get(
    function (request, response) {

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT RecipeID,RecipeName,ShortDesc,GridImg FROM publishedrecipe";

        //Perform query to database from web server
        db.query(sql, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Insert new recipe into database (submitrecipe.html)
app.route("/submitrecipe").post(
    function (request, response) {

        //INSERT query to save review's details into database. 
        var sql = "INSERT INTO submittedrecipe (UserID, RecipeName, RecipeDesc, Recipe, AuthCredit) VALUES ( ? , ? , ? , ? , ? )";

        //Prepare parameters to parse into sql statement.
        var params = [Number(request.body.userid), request.body.recipe_name, request.body.recipe_desc, request.body.recipe, request.body.author_credit];

        //Perform query to database from web server
        db.query(sql, params, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        });
    }
)

//Retrieve recipe's details using ID (recipecard.html)
app.route('/recipe').get(
    function (request, response) {
        var articleID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT * FROM publishedrecipe LEFT JOIN user USING (UserID) WHERE RecipeID = ? ";

        //Perform query to database from web server
        db.query(sql, [articleID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Retrieve all blog records from database (blog.html)
app.route('/blog').get(
    function (request, response) {

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT * FROM blog ORDER BY Date DESC";

        //Perform query to database from web server
        db.query(sql, function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });

//Retrieve selected article's details (blogarticle.html)
app.route('/blogarticle').get(
    function (request, response) {
        var articleID = request.query.id; //Retrieve user id from url.

        //SELECT query to retrieve user's details and their reviews.
        var sql = "SELECT * FROM blog WHERE PostID = ? ";

        //Perform query to database from web server
        db.query(sql, [articleID], function (error, result) {
            if (error) {
                throw error;

            } else {
                //Return result as json
                response.json(result);
            }
        })
    });


