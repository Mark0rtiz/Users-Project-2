// create the user constructor
class User {
    constructor(fname, lname, email, password) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
    }
}
function isValid(User){
    //return true if the user is valid
    //return false if the user is not valid
    let valid=true;
    if(User.email.length==0){
        valid=false;
        $("#txtEmail").addClass("input-error");
        console.error("Please, enter a valid email");
    }
    if(User.password.length==0){
        valid=false;
        $("#txtPassword").addClass("input-error");
        console.error("Please, enter a valid password");
    }
    return valid;
}
//create the register function
function register(){
    let userName=$("#txtFirstName").val();
    let userLName=$("#txtLastName").val();
    let userEmail=$("#txtEmail").val();
    let userPassword=$("#txtPassword").val();
    //create the object
    let newUser = new User(userName, userLName, userEmail, userPassword)

    console.log(newUser);
    if(isValid(newUser)){
        saveUser(newUser);
    }
}
    //get values from the inputs

    //display the user on the console

    function init(){
        $("#userForm").hide();

        //hook events
        $("#newUser").on("click",function(){
            $("#userForm").slideDown(2000);
        });

        $("#hideForm").on("click",function(){
            $("#userForm").slideUp(2000);
        });
    }
    window.onload = init;