let comment = document.getElementById('comment');
let comment_favor = document.getElementById('comment_favorite_value');
let comment_favor_Data = document.getElementsByClassName("comment_favorite");
let comment_add_Data = document.getElementsByClassName("comment_add");

comment_favor_Data[0].onclick = function() {
    {
      var favor = comment_favor.innerHTML;
      console.log("1");
        favor*=1;
        favor+=1;
        comment_favor.innerHTML=favor;
    }
  }
  
comment_add_Data[0].onclick = function() {
    {
        comment.innerHTML += "<li><input type="text"></li>";
    }
  }