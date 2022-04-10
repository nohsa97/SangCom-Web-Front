let study_day = document.getElementById('Study_day');
let study_period = document.getElementById('Study_period');
let study_name = document.getElementById('Study_name');
let study_place = document.getElementById('Study_place');
let study_teacher = document.getElementById('Study_teacher');

let get_period = document.getElementById('2st_tue')


function getClass(){
    var period = study_period.value;
    period+=study_day.value;
    console.log(period);
    var tempdata = {
        "study_name" : study_name,
        "study_period" : study_period,
        "study_day" : study_day,
        "study_place" : study_place,
        "study_teacher" : study_teacher,
    } 
    localStorage.setItem("schedule",JSON.stringify(tempdata));
}

function addClass(){
    JSON.parse(localStorage.getItem("schedule"));
    console.log()

}
JSON.parse