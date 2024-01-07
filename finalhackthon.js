let firstButton = document.getElementById("aboutButton");
let secondButton = document.getElementById("timeToVisitButton");
let thirdButton = document.getElementById("attractionsButton");
let firstMatter = document.getElementById("aboutTab")
let secondMatter = document.getElementById("timeToVisitTab")
let thirdMatter = document.getElementById("attractionsTab");
let javaScriptImage=document.getElementById("javaScriptImage");
secondMatter.style.display = "none"
thirdMatter.style.display = "none"

function firstDisplay() {
    firstButton.style.backgroundColor = "white";
    secondButton.style.backgroundColor = "#dae2ec"
    thirdButton.style.backgroundColor = "#dae2ec"
    firstMatter.style.display = "block"
    secondMatter.style.display = "none"
    thirdMatter.style.display = "none"
    javaScriptImage.src="image1.jpg";
}

function secondDisplay() {
    firstButton.style.backgroundColor = "#dae2ec";
    secondButton.style.backgroundColor = "white";
    thirdButton.style.backgroundColor = "#dae2ec"
    firstMatter.style.display = "none"
    secondMatter.style.display = "block"
    thirdMatter.style.display = "none"
    javaScriptImage.src="image2.jpg";

}




function thirdDisplay() {
    firstButton.style.backgroundColor = "#dae2ec";
    secondButton.style.backgroundColor = "#dae2ec"
    thirdButton.style.backgroundColor = "white"
    firstMatter.style.display = "none"
    secondMatter.style.display = "none"
    thirdMatter.style.display = "block"
    javaScriptImage.src="image8.jpg";
}



let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
}



let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let colorPickerContainer = document.getElementById("colorPickerContainer")
let spanEl = document.getElementById("selectedColorHexCode")

function funcOne() {
    colorPickerContainer.style.backgroundColor = "#e0e0e0"
    spanEl.textContent = "#e0e0e0"
}

function funcTwo() {
    colorPickerContainer.style.backgroundColor = "#6fcf97"
    spanEl.textContent = "#6fcf97"
}

function funcThree() {
    colorPickerContainer.style.backgroundColor = "#56ccf2"
    spanEl.textContent = "#56ccf2"
}

function funcFour() {
    colorPickerContainer.style.backgroundColor = "#bb6bd9"
    spanEl.textContent = "#bb6bd9"
}






let imageIsLiked = false;
let puppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");

function onClickLikeButton() {

    if (imageIsLiked === false) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        imageIsLiked = true;
    } else if (imageIsLiked === true) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        imageIsLiked = false;
    }
}



let myForm = document.getElementById("subscribeForm")
let errorName = document.getElementById("nameErrMsg")
let errorEmail = document.getElementById("emailErrMsg")

let myName = document.getElementById("name")
myName.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorName.textContent = "Required*"
        errorName.classList.add("error")
    } else {
        errorName.textContent = ""
    }
})

let myEmail = document.getElementById("email")
myEmail.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorEmail.textContent = "Required*"
        errorEmail.classList.add("error")
    } else {
        errorEmail.textContent = ""
    }
})



















myForm.addEventListener("submit", function(event) {
    event.preventDefault()
    
})