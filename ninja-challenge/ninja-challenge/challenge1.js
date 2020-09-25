// Challenge 1: Write your answers here

document.querySelector("body").style.backgroundColor ="aqua";

document.querySelector("header").style.backgroundImage ="url(https://c1.wallpaperflare.com/preview/739/959/795/ninja-warrior-japan-assassin.jpg)"

for (let elem of document.querySelectorAll("h2")){
    elem.style.color ="blue"
}

//name
document.getElementById("name").innerText="Hafsa Awan"

//descriptions
document.querySelectorAll(".descriptions")[0].innerHTML="<p>Hi there! I am becoming a <strong>Full Stack Web Developer</strong> at <em>Next Academy</em></p>"

document.querySelectorAll(".descriptions")[1].innerHTML="<p>I am a passionate learner. I love to learn new skills. <br />I am in love with coding!<br /> Find me on LinkedIn and be a part of my LinkedIn family :)</p>"

//Skills
document.getElementById("skills-list").innerHTML ="<li>Coding HTML/CSS/JavaScript/Python/C++</li><li>Expert at MS Office Word, PowerPoint, Excel, Access</li>"

//querySelectorAll(#skills-list li") -- this will give array of two list items
//USING LOOP
//const skillsList = document.querySelector("skills-list")
//skillsList.innerHTML=""  - delete existing skills list 
// craete a loop to craete and add list items

/*

*/

//Education
document.getElementById("education-list").innerHTML ="<li>Nanga Parbat Academy, Somewhere in Himalayas</li><li>Over the Internet, MS Office Cloud</li>"
//Employment
let myTable = document.getElementById("employment-table")

row1 =myTable.rows[0].cells;
row1[0].innerText="Programmer";
row1[1].innerText="Ninja Corporation";
row1[2].innerHTML="2020 - Current"

row2 =myTable.rows[1].cells;
row2[0].innerText="Web Developer";
row2[1].innerText="All Shout Parties";
row2[2].innerHTML="2018 - 2020"


//profile picture
document.getElementById("my-face").src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvQGYJSwMlXJqlf7QLiWMObeQ6z0z0PIxVJg&usqp=CAU'

//skills picture
document.querySelector("#skill-images img").src = "https://storage.needpix.com/rsynced_images/ninja-155848_1280.png"
