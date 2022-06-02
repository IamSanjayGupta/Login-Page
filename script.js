let credential = {
    admin:"password"
}

function entry(){
    let user = document.querySelector('#username').value;
    let pass = document.querySelector('#password').value;
    if(credential[user]==pass){
        console.log("Success")
    }else{
        console.log("something wrong")
        document.querySelector("#overlay").removeAttribute("class");
    }
}

let 