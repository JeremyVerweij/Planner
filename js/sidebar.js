const newBTN = document.getElementById("new");
const loadBTN = document.getElementById("load");
const planCreationWindow = document.getElementById("planCreationWindow");
const planCreationWindowName = document.getElementById("planCreationWindowName");
const planCreationWindowCreate = document.getElementById("planCreationWindowCreate");
const planCreationWindowCancel = document.getElementById("planCreationWindowCancel");

newBTN.addEventListener("click", ()=>{
    planCreationWindow.style.display = "";
})

planCreationWindowCreate.addEventListener("click", () => {
    var tmp = planCreationWindowName.ariaValueMax;
    if(tmp=="") return;

    

    planCreationWindow.style.display = "none";
})

planCreationWindowCancel.addEventListener("click", () => {
    planCreationWindow.style.display = "none";
})