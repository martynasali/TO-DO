let priority = document.querySelector("#priority");
let tema = document.querySelector("#tema");
let prioritetas = document.querySelector("#prioritetas");
let data = document.querySelector("#data");
let range = document.querySelector("#myRange");
let prideti = document.querySelector("#prideti");
let tableBody = document.querySelector("#tableBody");
let form = document.querySelector("#form");


prideti.addEventListener("click", function (e){
    e.preventDefault();
    addToDo();}, false);


prideti.addEventListener("click", function (e){
    e.preventDefault();
    form.reset();
}, false);


function addToDo(){
    if(tema.value === "" || priority.value ==="" || data.value === ""){
        alert("Įveskite reikšmes!")
    }
    else{
    let tbodyRow = document.createElement("tr");
    tableBody.appendChild(tbodyRow);

    let addCheck = document.createElement("td");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    tbodyRow.appendChild(addCheck);
    addCheck.appendChild(check);

    check.addEventListener("click", crossingOut);
    function crossingOut(){
        if(check.checked === true){
            addSubject.style.textDecoration="line-through";
            addSubject.style.opacity="0.5";
        }
       else if (check.checked === false){
            addSubject.style.textDecoration="none";
            addSubject.style.opacity="1";
        }
    }

    let addSubject = document.createElement("td");
    addSubject.innerHTML = '<p class="text-center">'+tema.value+'</p>';
    tbodyRow.appendChild(addSubject);


    let prrt = document.createElement("td");
    let spalvos = priority.value;
    if(spalvos === "Aukštas")
    prrt.innerHTML = '<p class="text-center text-light rounded bg-dark  ">'+spalvos+'</p>';
    else if(spalvos === "Vidutinis")
    prrt.innerHTML = '<p class="text-center rounded bg-secondary ">'+spalvos+'</p>';
    else if(spalvos === "Žemas")
    prrt.innerHTML = '<p class="text-center text-dark rounded bg-warning ">'+spalvos+'</p>';
    tbodyRow.appendChild(prrt);

    let addDate = document.createElement("td");
    addDate.innerHTML = '<p class="text-center">'+data.value+'</p>';
    tbodyRow.appendChild(addDate);

    let addPercent = document.createElement("td");
    addPercent.innerHTML = '<p class="text-center">'+range.value+' %</p>';
    tbodyRow.appendChild(addPercent);


    let addDelete = document.createElement("td");
    addDelete.className="d-flex justify-content-center"
    addDelete.innerHTML = '<input id="deleteBtn" class="rounded text-dark" type="button" value="Ištrinti">';
    tbodyRow.appendChild(addDelete);

    addDelete.addEventListener("click", function (e){
        e.preventDefault();
        deleteItem(e.target.parentNode.parentNode);
    },false);

    function deleteItem(row){
        tableBody.removeChild(row);
    }
}}