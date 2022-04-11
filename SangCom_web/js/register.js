let finalCheck = document.getElementById('checkbox');


//유효성 검사 기본 틀들.
var pattern_num = /[0-9]/;	// 숫자
var pattern_eng = /[a-zA-Z]/;	// 문자
var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
var RegExp = /^[a-zA-Z0-9]{4,12}$/;
var e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function checkNum(num){
  var num2 = document.getElementById('year');
  // var num = this.value;
  if(!pattern_num.test(num)){
    alert('숫자만 입력해주세요.');
    num2.value='';
  }
}

function loadItem(){
  return fetch("http://127.0.0.1:5501/json/userData.json")
  .then((response) => response.json())
  .then((json)=>json.items);
}

function checkID() {
  var tr =false ;
  var ID = document.getElementById('id');

  if(!RegExp.test(ID.value)){ //아이디 유효성검사
    alert("ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");        
    ID.value ='';
    return false;
  }
  
  loadItem().then((items)=>{
    for(var i=0;i<items.length;i++ ) {
      if(items[i].id == ID.value)
      {
        alert('이미 존재하는 아이디입니다.');
        finalCheck.disabled=true;
        break;
      }
      if(i==items.length-1)
      {
        tr=true;
        finalCheck.disabled=false;
      }
    }

    if(tr == true){
      alert('가능한 ID입니다.');
    }
    else {
      
    }
  })
  

  
}

function check(){
  var ID = document.getElementById('id');
  var PW = document.getElementById('password');
  var PWC = document.getElementById('passwordCheck');
  var name  = document.getElementById('name');
 // var birth = document.getElementById('birth');
  var year = document.getElementById('year');
  var phone = document.getElementById('phone');
  var email = document.getElementById('email');


  if(ID.value==''){
    alert("아이디를 입력해주십시오.");
    return false;
  }
  if(PW.value == ''){
    alert("비밀번호를 입력해주십시오.");
    return false;
  }

  if(PWC.value =='' || PWC.value!=PW.value){
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }

  if(name.value == ''){
    alert("이름을 입력해주십시오.");
    return false;
  }

  if(year.value == ''){
    alert("입학년도를 입력해주십시오.");
    return false;
  }

  if(phone.value == ''){
    alert("전화번호를 입력해주십시오.");
    return false;
  }

  if(email.value == ''){
    alert("이메일를 입력해주십시오.");
    return false;
  }

  if(!e_RegExp.test(objEmail.value)){ //이메일 유효성 검사
    alert("올바른 이메일 형식이 아닙니다.");
    return false;
  }
  if(final_check.check == false){
    alert('개인정보 관련 동의를 눌러주세요.');
    return false;
  }

  else{

  }
}






 
//출처: https://yeonvley.tistory.com/13 [코딩하는 이쁘니] 