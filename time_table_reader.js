// import {timeTable, classLink, blockStartTimings} from "./time_table.js";
// function timeAsNum(hours,minutes,seconds){
//     return hours*10000+minutes*100+seconds; 
// }
// function dayNumToStr(num){
//     switch (num){
//         case 1:
//             return "Monday";
//         case 2:
//             return "Tuesday";
//         case 3:
//             return "Wednesday";
//         case 4:
//             return "Thursday";
//         case 5:
//             return "Friday";
//         case 6:
//             return "Saturday";
//         case 7:
//             return "Sunday";
//     }
    
// }
// function blockNum(){
//     const secondsNow = new Date().getSeconds();
//     const minutesNow = new Date().getMinutes();
//     const hoursNow = new Date().getHours();

//     const currentTime = timeAsNum(hoursNow,minutesNow,secondsNow);
    
//     const start = blockStartTimings.start;
//     const Block1 = blockStartTimings.Block1;
//     const Block2 = blockStartTimings.Block2;
//     const Block3 = blockStartTimings.Block3;
//     const Block4 = blockStartTimings.Block4;
//     const Block5 = blockStartTimings.Block5;
//     const end = blockStartTimings.end;

//     if(currentTime >= start && currentTime < Block1){
//         return 10;
//     }
//     else if(currentTime >= Block1 && currentTime < Block2){
//         return 0;
//     }
//     else if(currentTime >= Block2 && currentTime < Block3){
//         return 1;
//     }
//     else if(currentTime >= Block3 && currentTime < Block4){
//         return 2;
//     }
//     else if(currentTime >= Block4 && currentTime < Block5){
//         return 3;
//     }
//     else if(currentTime >= Block5 && currentTime < end){
//         return 4;
//     }
//     else{
//         return 10;
//     }
// }
// function className(num){
//     const dayToday = new Date().getDay();
//     return timeTable[dayNumToStr(dayToday)][num];

// }
// export function readTimeTable(){
//     const classRN = className(blockNum());
//     document.getElementById("english-btn").addEventListener('click',() => {
//         window.open(classLink["English"], "_self");
//     });
//     document.getElementById("physics-btn").addEventListener('click',() => {
//         window.open(classLink["Physics"], "_self");
//     });
//     document.getElementById("chemistry-btn").addEventListener('click',() => {
//         window.open(classLink["Chemistry"], "_self");
//     });
//     document.getElementById("maths-btn").addEventListener('click',() => {
//         window.open(classLink["Maths"], "_self");
//     });
//     document.getElementById("computer-btn").addEventListener('click',() => {
//         window.open(classLink["Computer"], "_self");
//     });

    
//     if (blockNum() >=0 && blockNum() <= 4){
//         document.getElementById("join-btn-rn").addEventListener('click',() => {
//             window.open(classLink[classRN], "_self");
//         });
//         return classRN;
//     }
//     else{
//         document.getElementById("join-btn-rn").addEventListener('click',() => {
//             window.open(classLink["CTBlock"], "_self");
//         });
//         return "Class Teacher Block";
//     }
    
// };