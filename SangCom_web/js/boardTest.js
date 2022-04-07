

    // fetch('navList').then(function(res){
    //     res.text().then(function(text){
    //         document.getElementById('navBar').innerHTML = text;
    //     })
    // });

    var dd = new XMLHttpRequest();

$

$(document).ready(function(){
    $("#schoolLink").click(function(){
        $("#schoolLink").hide();
    });
});

fetch('js/boardList2').then(function(res){
    res.text().then(function(text){
        var navs = '';
        var items = text.split(',');
        i=0;
        while(i<items.length){
            if(items[i]=='x')
            {
                navs += '<br />';
                i++;
            }
            else{
            var tag = '<div class=""> <ion-icon name="grid-outline" class="" id=""></ion-icon>  <a href="'+items[i]+'.html" class="nav_logo">'+items[i]+'</a>  </div>';
            navs += tag;
            i++;
          }
        }
        document.getElementById('navBar').innerHTML = navs;
    })
});

// function loadJSON() {
//     return fetch('json/bordList.json').then(function(res){
//         return res.json();
//     })
//    .then(function (data) { receive(JSON.stringify(data));
//    });
// }
