let memeTopText;
let memeBottomText;

let generatedTopText = document.querySelector(".meme-display .top-text");
let generatedBottomText = document.querySelector(".meme-display .bottom-text");

let memeImageDDL = document.querySelector("select");
let memeImage = document.querySelector(".meme-display img");

let error = document.querySelector(".error");


memeImageDDL.addEventListener("change", function DDLHandler(){
    error.innerHTML = "";

    generatedTopText.innerHTML = "";
    memeTopText = "";
    generatedBottomText.innerHTML = "";
    memeBottomText = "";

    if (memeImageDDL.value === ""){
        memeImage.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
        memeImage.alt = "Placeholder Image";
        
        error.innerHTML += "Please choose an image" + "<br>";
    }
    else if (memeImageDDL.value === "fry-meme"){
        memeImage.src = "img/fry-meme.png";
        memeImage.alt = "Fry Meme";
    }
    else if (memeImageDDL.value === "one-does-not-simply-meme"){
        memeImage.src = "img/one-does-not-simply-meme.png";
        memeImage.alt = "One Does Not Simply Meme";
    }
    else if (memeImageDDL.value === "most-interesting-man-meme"){
        memeImage.src = "img/most-interesting-man-meme.png";
        memeImage.alt = "Most Interesting Man Meme";
    }
})


addEventListener("submit", function memeGenerate(event) {

    memeTopText = document.getElementById("meme-top-text").value;
    memeBottomText = document.getElementById("meme-bottom-text").value;

    event.preventDefault();
    error.innerHTML = "";
    
    if (memeImageDDL.value === ""){
        error.innerHTML += "Please choose an image" + "<br>";
    }

    if (memeTopText.trim() === "") {
        error.innerHTML += "Top text must not be empty" + "<br>";
    }
    if (memeBottomText.trim() === "") {
        error.innerHTML += "Bottom text must not be empty" + "<br>";
    }

    generatedTopText.innerHTML = memeTopText;
    generatedBottomText.innerHTML = memeBottomText;
});

addEventListener("reset", function memeReset(){
    generatedTopText.innerHTML = "";
    memeTopText = "";
    generatedBottomText.innerHTML = "";
    memeBottomText = "";

    memeImage.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
    memeImage.alt = "Placeholder Image";

    error.innerHTML = "";
});