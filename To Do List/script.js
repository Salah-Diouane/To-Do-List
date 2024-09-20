
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if (inputBox.value === '')
    {
        alert("you nust write something!!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.creatElement("span");
        span.innerHTML = "\u00d7";
        li.appenfChild(span);
    }
    inputBox.value = "" ;
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElemnt.renove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();