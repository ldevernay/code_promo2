var count = 0;
// var list = document.getElementById("list");

function addTask() {
    var task = document.getElementById("pouet").value;
    var li = document.createElement("li");
    li.innerHTML = task;
    li.id = count;
    li.removeAttribute("style")
    count++;
    document.getElementById("list").appendChild(li);
    var button = document.createElement("button");
    button.id = li.id;
    button.setAttribute("onclick", "removeTask(" + li.id + ")");
    button.innerHTML = "X";

    var strike = document.createElement("button");
    strike.id = li.id;
    strike.setAttribute("onclick", "strikeTask(" + li.id + ")");
    strike.innerHTML = "Done";

    document.getElementById(li.id).appendChild(button)
    document.getElementById(li.id).appendChild(strike)
}

function removeTask(index) {
    document.getElementById("list").removeChild(document.getElementById(index));
}

function strikeTask(index) {
    if (document.getElementById(index).style['textDecoration'] == "") {
        style = "text-decoration:line-through";
        document.getElementById(index).style = style;
    } else {
        document.getElementById(index).removeAttribute("style")
    }
}