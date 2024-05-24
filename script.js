function checkUserName(){
    var checkLength = document.getElementById("username").value.length;

    if(checkLength == 0){
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("usernamelabel").style.color = "red";
        document.getElementById("usernameerror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("username").style.borderColor = "green";
        document.getElementById("usernamelabel").style.color = "green";
        document.getElementById("usernameerror").innerHTML = "";
    }
}

function checkPreferredName(){
    var checkLength = document.getElementById("pname").value.length;

    if(checkLength == 0){
        document.getElementById("pname").style.borderColor = "red";
        document.getElementById("pnamelabel").style.color = "red";
        document.getElementById("pnameerror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("pname").style.borderColor = "green";
        document.getElementById("pnamelabel").style.color = "green";
        document.getElementById("pnameerror").innerHTML = "";
    }
}

function checkUserPassword(){
    var checkLength = document.getElementById("password").value.length;

    if(checkLength == 0){
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("passwordlabel").style.color = "red";
        document.getElementById("passworderror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("passwordlabel").style.color = "green";
        document.getElementById("passworderror").innerHTML = "";
    }
}

function checkUserEmail(){
    var checkLength = document.getElementById("email").value.length;

    if(checkLength == 0){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emaillabel").style.color = "red";
        document.getElementById("emailerror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("emaillabel").style.color = "green";
        document.getElementById("emailerror").innerHTML = "";
    }
}

function checkUserAddress(){
    var checkLength = document.getElementById("address").value.length;

    if(checkLength == 0){
        document.getElementById("address").style.borderColor = "red";
        document.getElementById("addresslabel").style.color = "red";
        document.getElementById("addresserror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("address").style.borderColor = "green";
        document.getElementById("addresslabel").style.color = "green";
        document.getElementById("addresserror").innerHTML = "";
    }
}

function checkUserInterests(){
    var checkLength = document.getElementById("interests").value.length;

    if(checkLength == 0){
        document.getElementById("interests").style.borderColor = "red";
        document.getElementById("interestslabel").style.color = "red";
        document.getElementById("interestserror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("interests").style.borderColor = "green";
        document.getElementById("interestslabel").style.color = "green";
        document.getElementById("interestserror").innerHTML = "";
    }
}

function validateValues(){
    var userName, preferredName, password, email, address, interests, emptyFieldsCount, genderSelected;
    emptyFieldsCount = 0;

    userName = document.getElementById("username").value;
    preferredName = document.getElementById("pname").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    interests = document.getElementById("interests").value;

    var fieldValues = [userName, preferredName, password, email, address, interests];

    for (var i = 0; i < fieldValues.length; i++){
        if (fieldValues[i] == ""){
            emptyFieldsCount++;
        }
    }

    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
    var noChecked = document.getElementById("no").checked;

    if (maleChecked || femaleChecked || noChecked){
        genderSelected = true;
    }
    else{
        genderSelected = false;
    }

    if (emptyFieldsCount == 0 && genderSelected){
        document.getElementById("submit").removeAttribute("disabled");
    }
    else{
        document.getElementById("submit").setAttribute("disabled", "");
    }
}

function submitForm(){
    var userName, preferredName, password, email, address, interests, genderOutput, radioChoice;
    radioChoice = document.getElementsByName("gender");
    genderOutput = "";

    for (var i = 0; i < radioChoice.length; i++){
        if(radioChoice[i].checked){
            genderOutput = genderOutput + radioChoice[i].value; 
        }
    }

    userName = document.getElementById("username").value;
    preferredName = document.getElementById("pname").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    interests = document.getElementById("interests").value;


    document.getElementById("usernamedisplay").innerHTML = "Name: " + userName;
    document.getElementById("pnamedisplay").innerHTML = "Preferred Name: " + preferredName;
    document.getElementById("passworddisplay").innerHTML = "Password: " + password;
    document.getElementById("emaildisplay").innerHTML = "Email: " + email;
    document.getElementById("addressdisplay").innerHTML = "Address: " + address;
    document.getElementById("interestsdisplay").innerHTML = "Interests: " + interests;  
    document.getElementById("genderdisplay").innerHTML = "Gender: " + genderOutput;
    return (false);
}

function resetForm(){
    document.getElementById("form").reset();
    document.getElementById("submit").setAttribute("disabled", "");
}

