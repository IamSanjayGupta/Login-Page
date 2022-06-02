let credential = {
    admin:"password"
}

function entry(){
    let user = document.querySelector('#username').value;
    let pass = document.querySelector('#password').value;
    console.log(credential);
    console.log(user);
    console.log(pass);
    if(credential[user]==pass){
        console.log("Successfully Logged in");
    }else{
        console.log("something wrong")
    }
}