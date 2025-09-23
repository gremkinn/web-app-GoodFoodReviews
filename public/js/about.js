
//Function submit enquiry to database
function submitContact() {
 
    //Retrieve user input and define new object to send data
    var data = new Object;
    data.enquiryName = document.getElementById('enquiryName').value;
    data.email = document.getElementById('email').value;
    data.telnum = document.getElementById('telnum').value;
    data.enquiry = document.getElementById('enquiry').value;

    //Convert the data to a JSON string
    var jsonData = JSON.stringify(data);

    //Initialize a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Set the request method and request URL 
    request.open("POST", '/enquiry', true);

    //Set request header type as json
    request.setRequestHeader("Content-Type", "application/json");

    //Callback function when data is returned from the web server
    request.onload = function () {
        //Code to carry out after request is completed.
        alert('Your enquiry has been successfully sent! We will reach out to you in 3-5 working days.');
    }

    //Send request to web server
    request.send(jsonData);
}