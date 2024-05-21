const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let deleteBTN = document.createElement("span")
        deleteBTN.innerHTML = "\u00d7";
        li.appendChild(deleteBTN);
    }

    inputBox.value = "";
    saveData();

}

listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();