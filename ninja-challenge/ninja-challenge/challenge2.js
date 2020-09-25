// Challenge 2: Write your answers here

//Add a new <section> at the end of the page
let newSection = document.createElement("section");

// Give it a title called "What do I think of JS"
//Add a paragraph of what you really think about JS
newSection.innerHTML = "<h2>What do I think of Js</h2><p>JavaScript is a programming language used in web development. It allows us to make interactive and dynamic websites!</p>"

document.querySelector("article").appendChild(newSection);

//Use appendChild to add new skill and education items to the their respective lists
newSkill = document.createElement("li");
newSkill.innerHTML = "Problem solver";
document.getElementById("skills-list").appendChild(newSkill);

newEduItem = document.createElement("li");
newEduItem.innerHTML = "Honor Class, Greenland";
document.getElementById("education-list").appendChild(newEduItem);



//Add new rows to Employment table
const employmentRecords = [
    ["Intern", "PAC", "2002-2007"], ["Junior Manager", "ABC", "2007-2010"],[" Senior Manager", "ABC", "2010-2012"],[" GeneralManager", "ABC", "2012-2019"]
]
let employmentTable = document.getElementById("employment-table");

employmentTable.innerHTML = ""

for (let employment of employmentRecords){
    const row = document.createElement("tr");
    for (let field of employment){
        const cell = document.createElement("td");
        cell.innerText = field
        row.appendChild(cell)
    }
    employmentTable.appendChild(row)
}

//Add new skill images
newSkillImage = document.createElement("img");

newSkillImage.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvQGYJSwMlXJqlf7QLiWMObeQ6z0z0PIxVJg&usqp=CAU'

document.getElementById("skill-images").appendChild(newSkillImage)

