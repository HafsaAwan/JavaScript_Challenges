// Challenge 1: Write your answers here

document.querySelector("body").style.backgroundColor = "aqua"

const header = document.querySelector("header")

header.style.backgroundImage = "url('https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
header.style.backgroundSize = "cover"

const h2els = document.querySelectorAll("h2")

for(let el of h2els ){
  el.style.color = "green"
}

document.getElementById("name").innerText = "Chan Ming Hao"
const descriptions = document.querySelectorAll(".descriptions")
descriptions[0].innerText = "Hello, I'm a programmer!"
descriptions[1].innerText = "This is the second description!"

const skillsList = document.querySelector("#skills-list")
const skills = ["Programming", "Cooking", "Sports", "Accounting"]

skillsList.innerHTML = ""
for(let skill of skills){
  const listItem = document.createElement("li")
  listItem.innerText = skill
  skillsList.appendChild(listItem)
}


const educationList = document.querySelector("#education-list")
const educations = ["High School", "Primary School", "University"]

educationList.innerHTML = ""
for(let education of educations){
  const listItem = document.createElement("li")
  listItem.innerText = education
  educationList.appendChild(listItem)
}

const employmentTable = document.querySelector("#employment-table")
const employments = [
  ["Programmer", "Next Academy", "2016 - Current"],
  ["Accountant", "PwC", "2014-2016"]
]
employmentTable.innerHTML = ""

for(let employment of employments){
  const row = document.createElement("tr")
  for(let field of employment){
    const cell = document.createElement("td")
    cell.innerText = field
    row.appendChild(cell)
  }
  employmentTable.appendChild(row)
}

document.querySelector("#my-face").src = "https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"

document.querySelector("#skill-images img").src = "https://elearningindustry.com/wp-content/uploads/2015/02/shutterstock_164393432.jpg"



//  education
// Education
// Employment