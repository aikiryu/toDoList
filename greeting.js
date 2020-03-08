//선택자
const nForm = document.querySelector('.nameForm'),
      nInput = nForm.querySelector('input'),
      greeting = document.querySelector('.greeting');
      
const USER_LS = 'currentUser',
      SHOW = 'show';
//로컬스토리지에서 Key역할을 하게 될 구문      
//어떤값을 받아서 그 값을 로컬에 저장
let saveName = function(text){
localStorage.setItem(USER_LS,text);
}//func.saveName

//입력받은 값을 출력하는 함수
let printName = function(text){
nForm.classList.remove(SHOW);
greeting.classList.add(SHOW);
greeting.innerText = `HELLO ${text}!`;
}


//네임폼의 서브밋 이벤트
let nameSubmit =function(e){

   e.preventDefault();
let currentValue= nInput.value;
saveName(currentValue);//이름 로컬에 저장
printName(currentValue);//이름 출력하는 함수


}

let askForName = function(){
//폼이 나타난다 
nForm.classList.add(SHOW);
nForm.addEventListener('submit',
nameSubmit);

}//func.askForName


let loadName = function(){

let currentUser = 
localStorage.getItem(USER_LS);

if(currentUser === null){
    //사용자의 이름이 로컬에 없을때
    askForName();
}else{
  //사용자의 이름이 로컬에 있을때
    printName(currentUser);
}

}//func.loadName

loadName();//최종출력함수





