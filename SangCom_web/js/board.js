let comment_favor = document.getElementById('comment_favorite_value');
let comment = document.getElementById('comment');
var favor = comment_favor.innerHTML;

document.getElementById('comment_favorite').onclick = function() {
    {
        favor*=1;
        favor+=1;
        comment_favor.innerHTML=favor;
    }
  }

  
document.getElementById('comment_add').onclick = function() {
    {
        comment.innerHTML += "<h1>dd</h1>";
    }
  }