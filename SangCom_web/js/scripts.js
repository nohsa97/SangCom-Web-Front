function logout(){
    if(confirm("로그아웃 하시겠습니까?")==true){
        alert('로그아웃 되었습니다.');
        location.href = "index.html";
    }
    else {
        return;
    }
}