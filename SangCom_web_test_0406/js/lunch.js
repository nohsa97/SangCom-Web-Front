  let today = new Date();
  let Week = ["일","월","화","수","목","금","토"];

  document.getElementById('Date').innerHTML=today.getFullYear()+"년 "
  +(today.getMonth()+1)+"월 "+(today.getDate())+"일 "+(Week[(today.getDay())])+"요일" ;

  document.getElementById('Date2').innerHTML=today.getFullYear()+"년 "
  +(today.getMonth()+1)+"월 " ;


    // let today = new Date();
    // let Week = ["일","월","화","수","목","금","토"];
    document.getElementById('M_D').innerHTML=(today.getMonth()+1)+"월 "+(today.getDate())+"일 "+(Week[(today.getDay())])+"요일" ;



    function newWindow() {
      window.open("schedule_edit.html","_blank","width= 300px, height=300px, resizeable=no");
    }

    function addClass() {
      let Study_name = document.getElementById('Study_name').value;
      let Study_day = document.getElementById('Study_day').value;
      let Study_place = document.getElementById('Study_place').value;
      let Study_period = document.getElementById('Study_period').value;
      let Study_teacher = document.getElementById('Study_teacher').value;

      const str = Study_period.concat(Study_day);
     document.getElementById(str).innerHTML=Study_name;

    }
 