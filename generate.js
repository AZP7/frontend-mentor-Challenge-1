const imageInput = document.getElementById("forImage");
const img_upload  = document.querySelector(".img_upload");
const buttonContainer = document.getElementById("image_tools");

document.getElementById("changeImageButton").addEventListener("click",()=>{
    imageInput.click();
})


imageInput.addEventListener("change",uploadImage)

function uploadImage(e){

    const file = e.target.files[0];
    const fileLimit = 500 * 1024;
    if(file && file.size > fileLimit){
        fileError(imageToplace,"File size exceeds the limit of 500KB." )
    }
    let ImageResult = document.createElement("IMG");

    let url = URL.createObjectURL(e.target.files[0]);
    imageToplace.children[1].style.display = "none";
    imageToplace.children[2].style.display = "none";

    ImageResult.src = url;
    imageToplace.appendChild(ImageResult);


    buttonContainer.style.display = "block"



}

function fileError(element, message){
    let errormsg = document.createElement("P");
    while (element.children.length>1){
        element.removeChild(imageToplace.children[1]);
    }
    errormsg.innerHTML = message;
    errormsg.style.color = "red";
    element.appendChild(errormsg);

}


function removeImage() {
    // Hide the button container
    buttonContainer.style.display = "none";

    // Show the placeholder elements
    imageToplace.children[1].style.display = "block";
    imageToplace.children[2].style.display = "block";

    // Remove the uploaded image if it exists
    let img = imageToplace.querySelector("img");
    if (img) {
        imageToplace.removeChild(img);
    }
}

document.getElementById("removeImageButton").addEventListener("click", removeImage);
