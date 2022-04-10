let final_check = document.getElementById('reg_checkbox');



function checkID() {
  let ID = document.getElementById('member_ID');

  if(ID.value == "")
  {
    final_check.disabled=true;
  }
  else {
      final_check.disabled=false;
  }

}




function check () {
  // let ID = document.getElementById('member_ID');
  // let PW = document.getElementById('member_password');
  // let PWCK = document.getElementById('member_password_check');
  // let birth = document.getElementById('member_birth');
  // let addmission = document.getElementById('member_addmission');
  // let phone = document.getElementById('member_phone');
   let email = document.getElementById('member_email');

  if(email.includes('@'))
  {
    let email_ID = email.split('@')[0];
    let email_email = email.split('@')[1];
    if(email_ID==="" || email_email === "")
    {
      alert("email을 제대로 입력해주십시오.");
    }
  }
}


function finish(){
  let checkbox = document.getElementById('register_finish');

  alert('동의 하셨습니다.');
  document.getElementById('register_finish').disabled=false;
}







// <header class="py-5">
//     <div class="container px-lg-5">
//         <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
//           <form action="index.html" method="get">
//                 <h1 class="display-5 fw-bold">회원가입</h1>   <br>
//                 <label for="member_ID">아이디</label>
//                 <input type="text" name = "ID" id ="member_ID" placeholder="아이디" >
//                 <div id=id_error></div><br>
//
//                 <label for="member_password">비밀번호</label>
//                 <input type="password" name = "PW" id ="member_password" placeholder="비밀번호" ><br>
//
//                 <label for="member_password_check">비밀번호 확인</label>
//                 <input type="password" name = "PW_CK" id ="member_password_check" placeholder="비밀번호 확인" ><br>
//
//                 <label for="member_name">이름</label>
//                 <input type="text" name = "name" id ="member_name" placeholder="이름" ><br>
//
//                 <label for="member_birth">생년월일</label>
//                 <input type="date" name = "birth" id ="member_birth" placeholder="생년월일 8자리 ex)20210101" ><br>
//
//                 <select class="" name="student_class_grade">
//                   <option value="none">학년</option>
//                   <option value="1_grade">1</option>
//                   <option value="2_grade">2</option>
//                   <option value="3_grade">3</option>
//                 </select>
//
//                 <select class="" name="student_class_class">
//                   <option value="none">반</option>
//                   <option value="1_class">1</option>
//                   <option value="2_class">2</option>
//                   <option value="3_class">3</option>
//                   <option value="4_class">4</option>
//                   <option value="5_class">5</option>
//                   <option value="6_class">6</option>
//                   <option value="7_class">7</option>
//                 </select>
//                 번호
//                 <input type="text" name = "member_class_number" id ="member_class_number"  placeholder="번호"  style="width:40px"><br>
//
//                 <label for="member_addmission">입학년도</label>
//                 <input type="text" name = "member_addmission" id ="member_addmission" placeholder="ex)2021" ><br>
//
//                 <label for="member_class_phone">전화번호</label>
//                 <input type="text" name = "member_phone" id ="member_phone" placeholder="-제외 입력" ><br>
//
//                 <label for="member_email">이메일</label>
//                 <input type="text" name = "member_email" id ="member_email" placeholder="ex) example@example.com" style="width : 210px" ><br><br>
//
//                 <input type="checkbox" name="admit" value="admit">
