var data = JSON.parse(localStorage.getItem("Jplanner")||"[]");

function saveData(){
    localStorage.setItem("Jplanner", JSON.stringify(data));
}