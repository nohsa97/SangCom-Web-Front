let id = document.getElementById('member_ID');
let pw = document.getElementById('member_password');
let form = document.getElementById('loginForm');

   function loginBtn() {
     if(id.value=="")
     {
       alert('아이디를 입력 하십시오');
     }

     else if(pw.value=="")
     {
       alert('비밀번호를 입력 하십시오');
     }

     else if(id.value!='sangcomtest' || pw.value!='test') {
      alert('아이디 비밀번호가 틀렸습니다.');
     }

    if(id.value=='sangcomtest' && pw.value=='test') {
      alert("어서오십시오. SangComTest님.");
      location.href = 'main.html';
    }
}
