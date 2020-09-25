// Challenge 3: Write your answers here

//If the random-section has a black background color, display the texts in bold and white color so that they become readable.

const randomSection = document.getElementById("random-section");

if( randomSection.style.backgroundColor == "black"){
    randomSection.style.color ="white";
    randomSection.style.fontWeight="bold";
}