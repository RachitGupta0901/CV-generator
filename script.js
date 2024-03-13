/*alert("loading")*/
function addNewWEfield() {
    // console.log("add button")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');
    // input_box1.style.background = "red";


    let weob = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonOb);


}

function addNewAQfield() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    // console.log("gsdfgsdfg")

    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = namefield;
    // direct
    document.getElementById('nameT2').innerHTML = namefield;
    // emailfield
    document.getElementById('emailT').innerHTML = document.getElementById("emailfield").value;
    // contactfield
    document.getElementById('contactT').innerHTML = document.getElementById("contactfield").value;
    // addressfield
    document.getElementById('addressT').innerHTML = document.getElementById("addressfield").value;
    document.getElementById('fbT').innerHTML = document.getElementById("fbfield").value;
    document.getElementById('instaT').innerHTML = document.getElementById("igfield").value;
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedinfield").value;

    // Objective
    document.getElementById('objectiveT').innerHTML = document.getElementById("objectivefield").value;

    // we
    let wes = document.getElementsByClassName("wefield");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
    // aq
    let aqs = document.getElementsByClassName("eqfield");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;
    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'
}

function PrintCV() {
    window.print();
}