const fullname  = document.getElementById("full_name");
const email = document.getElementById("email");
const github = document.getElementById("github");
const profile = document.getElementById("forImage");
const generateBtn = document.getElementById("generate");
const generate_card = document.querySelector(".generate_card");
const result = document.querySelector(".result");



generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let result_name ;
    let result_email ;
    let result_github ;
    let result_profile ;


    const file = profile.files[0];
    if(!file){
        fileError(imageToplace,"No file selected");
    }
    else{
        result_profile = URL.createObjectURL(profile.files[0]);
    }
    if(fullname.value ===""|| fullname.value===null){
        invaildInput(fullname);
    }
    else{
        validInput(fullname);
        result_name = fullname.value;
    }
    if(email.value === ""|| email.value ===null){
        invaildInput(email);
    }
    else if(email.value.length>0){
        checkmail(email);
        validInput(email);
        result_email= email.value;
    }
    if(github.value === "" || github.value === null){
        invaildInput(github);
    }
    else if(github.value.length>0){
        checkgithub(github);
        validInput(github);
        result_github = github.value;
    }    
    
    if(result_email && result_github && result_name && result_profile){

        document.getElementById("main").style.display = "none";
        document.getElementById("result").style.display = "flex";
        const for_name = document.getElementById("first_h1");
        const for_name2 = document.getElementById("sec_h1");
        const for_email =document.querySelector(".for_email");
        const for_github = document.querySelector(".for_github");
        const for_profile = document.querySelector(".for_profile");

        for_name.innerHTML     = result_name;
        for_name2.innerHTML    = result_name;
        for_email.innerHTML    = result_email;
        for_github.innerHTML   = result_github;
        for_profile.src        = URL.createObjectURL( profile.files[0]);
    }
})

function checkgithub(element){
    if (github.value[0]!=="@"){
        let label = element.labels[0];
        let msg = label.firstElementChild;
        msg.innerHTML = "";
        msg.innerHTML = "(Please type your github username)";
    }
    else{
        validInput(element);

    }

}
function invaildInput(element){
    let label = element.labels[0];
    let msg = label.firstElementChild;
    msg.innerHTML = "";
    msg.innerHTML =`(${label.textContent} is required!)`;
}
function validInput(element){
    let label = element.labels[0];
    let msg = label.firstElementChild;
    msg.innerHTML = ""
}
function checkmail(element){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailPattern.test(element.value)){
        validInput(element)
    }
    else{
        let label = element.labels[0];
        let msg = label.firstElementChild;
        msg.innerHTML = "";
        msg.innerHTML =`(Please enter a valid email!)`;
    }
}
// function checktheForm(photo,name,mail,github){

//     if(checkInput(name)){
//         ErrorMessage(name,"Username");
//     }



// }
// function ErrorMessage(element,message){
//     let label = element.labels[0];
//     let msg = element.firstElementChild;
//     msg.innerHTML = `${message} is required!`;
// }
// function checkInput(element){
//     return element.value === "" || element.value ===null || element.value ===undefined;

// }
