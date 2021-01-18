const toDoForm = document.querySelector(".toDoForm");
    toDoInput = toDoForm.querySelector("input");
    toDoList = document.querySelector("js-toDoList");

const TODO_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (todo) {
        return toDo.id !== parseInt(li.id) ;
    });
    toDos = cleanToDos;
    saveToDos();
}
// fliter 은 array의 모든 아이템을 통해 함수를 실행하고, true인 아이템만 가지고 새로운 array를 만든다.

function saveToDos () {
     localStorage.setItem(TODO_LS, JSON.stringify(toDos);
}

function paintToDo (text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const nowId = toDos.length + 1;
    delBtn.innerText= "❌";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText=text;
    li.appendChild(span);
    li.appendChild((delBtn));
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id: newId;
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleTodoSubmit (event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// function something (toDo) {
//     console.log (toDo.text);
// }


function listToDos () {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null){
        console.log (loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log (parsedToDos);
        parsedToDos.forEach(function (toDo){
            console.log (toDo.text);
            paintToDo(toDo.text);
        });
    }
}
//toDos를 가져온 뒤, 이 라인에서는 parse. 즉 가져온 것을 자바스크립트 object로 변환해 줄것이고,
//각각에 대해서 paintToDo 라는 function이 실행될 것. paintToDo에 대해서는 이미 위에서 정의 했음.


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();