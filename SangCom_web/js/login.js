let id = document.getElementById('member_ID');
 let pw = document.getElementById('member_password');


  document.getElementById('login_btn').onclick = function() {
  {
     if(id.value=="")
     {
       alert('아이디를 입력 하십시오');
     }
     else if(pw.value=="")
     {
       alert('비밀번호를 입력 하십시오');
     }

    else {
      alert("어서오십시오. SangComTest님.")
    }
  }
}
