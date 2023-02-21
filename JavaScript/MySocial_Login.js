function validation(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        alert("Login Successfull");
        return false;
    }
    else{
        alert("Login Faild")
    }

}

function sighup(){
    alert("Redirected to Sign up page", window.open("../index.html"));
}