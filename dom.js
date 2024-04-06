const img = document.getElementById("image");
const yellowJacket = document.getElementById("yj");
const whiteCoat = document.getElementById("wc");
const grayCoat = document.getElementById("gc");
const adult = document.getElementById("ad");
let counter = 0;
img.addEventListener("click", (e) => {
    counter++;
    if(counter%4 === 1){
        img.src = "Image/harpSealWhiteCoat.jpg";
        yellowJacket.classList.toggle("current");
        whiteCoat.classList.toggle("current");
    }
    else if(counter%4 === 2){
        img.src = "Image/harpSealGrayCoat.png";
        whiteCoat.classList.toggle("current");
        grayCoat.classList.toggle("current");
    }
    else if(counter%4 === 3){
        img.src = "Image/harpSealAdult.jpg";
        grayCoat.classList.toggle("current");
        adult.classList.toggle("current");
    }
    else{
        img.src = "Image/harpSealYellowJacket.jpg";
        adult.classList.toggle("current");
        yellowJacket.classList.toggle("current");
    }
})
