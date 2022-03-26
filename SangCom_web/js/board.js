let time = new Date();
let month = time.getMonth()+1;
let day = time.getDate();

let comment = document.getElementById('comment');
let comment_favor = document.getElementById('comment_favorite_value');
let comment_favor_Data = document.getElementsByClassName("comment_favorite");
let comment_add_Data = document.getElementsByClassName("comment_add");
let vr = '1';

// document.getElementById('Date').innerHTML=today.getFullYear()+"년 "
//   +(today.getMonth()+1)+"월 "+(today.getDate())+"일 "+(Week[(today.getDay())])+"요일" ;

//   document.getElementById('Date2').innerHTML=today.getFullYear()+"년 "
//   +(today.getMonth()+1)+"월 " ;


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
function makecomment(input_text){
  var com ='<p class="comment_list"> <span class="material-icons">cloud</span><b>익명/2022-'+month+'-'+day+'</b><br>'+input_text+'</p> <div id="comment_btn" class="justify-content-end d-flex">     <input type="button" class="material-icons comment_btn comment_add" value="mode_comment">     <input type="button" class="material-icons comment_btn comment_favorite " value="favorite"      <span id="comment_favorite_value">1</span> </div>';
  return com;
}

function addChild() {
  var target = document.getElementById('commentList');
  var text = document.getElementById('comment_text').value;
  var input_comment = makecomment(text);
  document.getElementById('comment_text').value='';
  target.insertAdjacentHTML('beforeend',input_comment);
}




