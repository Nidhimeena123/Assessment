
function validate() {
    var first = document.forms["myform"]["fname"].value;
    var last = document.forms["myform"]["lname"].value;
    var email = document.forms["myform"]["email"].value;
    var mobile = document.forms["myform"]["mobile"].value;
    var gender = document.forms["myform"]["gender"].value;
    var date = document.forms["myform"]["date"].value;
    var address = document.forms["myform"]["address"].value;
    var city = document.forms["myform"]["city"].value;
    var pin = document.forms["myform"]["pin"].value;
    var state = document.forms["myform"]["state"].value;
    var pass = document.forms["myform"]["pass"].value;
    var Qualification = document.getElementById("Qualification");
    var Specialization = document.getElementById("Specialization");


    // First Name Validation
    if (first == "") {
        alert("Enter your first name");
        return false;
    }

    if (!isNaN(first)) {
        alert("Name should not be in characters");
        return false;
    }

    // First Name Validation
    if (last == "") {
        alert("Enter your last name");
        return false;
    }

    if (!isNaN(last)) {
        alert("Name should not be in characters");
        return false;
    }

    // EMAIL validation

    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");

    if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
        alert("Enter Valid Email");
        return false;
    }
    // Mobile validation
    if (mobile == "") {
        alert("Enter your mobile number");
        return false;
    }

    if (isNaN(mobile)) {
        alert("Mobile Number should be in digits");
        return false;
    }
    if (mobile.length != 10) {
        alert("Mobile number must be of 10 digits");
        return false;
    }

    // Gender Validation
    if (gender == "")
     {
        alert("Select Gender");
        return false;
    }

    
    // DOB validation
    if (date == "") {
        alert("Enter your date of birth");
        return false;
    }


    // Address Validation
    if (address == "") {
        alert("Enter an Address");
        return false;
    }

     // City Validation
     if (city == "") {
        alert("Enter city name");
        return false;
    }
    
     // Pin Validation
     if (pin == "") {
        alert("Enter Pincode");
        return false;
    }

    // State Validation
    if (state == "") {
        alert("Enter State");
        return false;
    }

    // Qualification validation
    if(Qualification=="Select Qualification")
        {
            alert("Select your Qualification");
            return false;
        }

    // Specialization validation
    if(Specialization == "")
        {
            alert("Select your Specialization");
            return false;
        }

     // Password Validation
     if (pass == "") {
        alert("Enter Password");
        return false;
    }
}

