let credential  = {
    admin:"Password",
};

let username = document.querySelector("#username").value;
let password = document.querySelector("#password").value;
if(credential[username]===password){
    console.log("Successfull Login!")
}