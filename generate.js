const imageToplace = document.getElementById("imagetoPlace");
const inputImage = document.getElementById("forImage");
const imgDisplay = document.getElementById("img_upload");

inputImage.addEventListener("change", uploadImage);

function uploadImage(){
    imageToplace.innerHTML = "";

    let imageResult = document.createElement("IMG");
    let button1 = document.createElement("BUTTON");
    let button2 = document.createElement("BUTTON");
    let div = document.createElement("DIV");


    button1.textContent = "Remove Image";
    button1.id = "remove_img";
    button2.id = "change_img";
    button2.textContent = "Change image";
    
    let imgurl = URL.createObjectURL(inputImage.files[0]);

    imageToplace.appendChild(imageResult);
    imageToplace.appendChild(div);
    div.appendChild(button1);
    div.appendChild(button2);

    imageResult.src = imgurl;

    button1.addEventListener("click",removeImg);
    button1.addEventListener("click",changeImg);

}
function removeImg(e){
    e.preventDefault();
    imageToplace.removeChild(imageToplace.firstChild);
}
function changeImg(e){
    e.preventDefault();

}