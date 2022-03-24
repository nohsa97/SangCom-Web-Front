let comment = document.getElementById('comment');
let comment_favor = document.getElementById('comment_favorite_value');
let comment_favor_Data = document.getElementsByClassName("comment_favorite");
let comment_add_Data = document.getElementsByClassName("comment_add");
let vr = '1';

comment_favor_Data[0].onclick = function() {
    {
      var favor = comment_favor.innerHTML;
      console.log("1");
        favor*=1;
        favor+=1;
        comment_favor.innerHTML=favor;
    }
  }

comment_add_Data[0].onclick = function(){
  comment_temp = comment.innerHTML;
  comment.innerHTML+='<input type="text" placeholder="답글을 입력해주세요." class="comment_input btn_basic"> <input type="submit" class="btnsmall_blue btn_basic" value="입력">';
  
  if(vr==='2')
  {
    comment.innerHTML='no';

    
  }
  vr = '2';
}
