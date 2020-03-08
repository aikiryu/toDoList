//선택자
const tForm = document.querySelector('.tForm'),
      tInput = tForm.querySelector('input'),
      ul = document.querySelector('.todoList');

//localstorage Key    
const TODO_LS = 'todos';
//할일 목록을 스토리지에 저장하기 위해
//배열저장해두는 곳
let toDos = [];
//////////////////////////////////

let saveTodo = function(){
//로컬스토리지에 todos를 저장
localStorage.setItem(TODO_LS,JSON.stringify(toDos)); 
}

let deleteTodo = function(e){
    const btn = e.target;
    const li = btn.parentNode;
    ul.removeChild(li);

    const clearTodos = toDos.filter(function(todo){ return todo.id !== parseInt(li.id);});
    toDos = clearTodos;
    saveTodo();
}

let printTodo = function(text){
//li를 생성
const li = document.createElement('li'),
    del = document.createElement('button'),
    span= document.createElement('span');
    const newId = toDos.length+1;
    del.innerText = 'X';
    span.innerText = text;
    li.appendChild(del);
    li.appendChild(span);
    ul.appendChild(li);

del.addEventListener('click',deleteTodo);


    li.id = newId;
    const toDo_Obj = {
        text : text,
        id : newId
    };
    toDos.push(toDo_Obj);
    //로컬스토리지에 저장
    saveTodo();

};//printTodo

//투두 폼에 값을 입력받았을때 일어나는 일
let todoSubmit = function(e){
e.preventDefault();
let todoValue = tInput.value;
printTodo(todoValue);
tInput.value = '';


}//todoSubmit





let loadTodo = function(){
 const load_todo = localStorage.getItem(TODO_LS);
 if(load_todo !== null){
//로컬스토리지중 KEY todos갖고있는 대상
//item을 갖고있을경우
const parseTodo = JSON.parse(load_todo);

parseTodo.forEach(function(t){
    printTodo(t.text);
}); //forEach

//printTodo(parseTodo);

}//if

}//loadTodo
//최종출력함수
loadTodo();
tForm.addEventListener('submit',todoSubmit);




