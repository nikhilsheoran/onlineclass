// export function convertHours(num){
//     if (num <= 12){
//         return num;
//     }
//     else{
//         return num-12;
//     }
// }
// export function convertToZero(num){
//     if (num < 10){
//         return "0" + num;
//     }
//     else{
//         return num;
//     }
// }
// export function AMorPM(num){
//     if (num < 12){
//         return "AM";
//     }
//     else{
//         return "PM";
//     }
// }
// export function dayNumToStr(num){
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
// export function monthNumToStr(num){
//     switch (num){
//         case 1:
//             return "January";
//         case 2:
//             return "February";
//         case 3:
//             return "March";
//         case 4:
//             return "April";
//         case 5:
//             return "May";
//         case 6:
//             return "June";
//         case 7:
//             return "July";
//         case 8:
//             return "August";
//         case 9:
//             return "September";
//         case 10:
//             return "October";
//         case 11:
//             return "November";
//         case 12:
//             return "December";
//     }
    
// }
// export function superscriptDay(date){
//     switch(date){
//         case 1:
//             return "st";
//         case 2:
//             return "nd";
//         case 3:
//             return "rd";
//         default: 
//             return "th";
//     }
// }
// export function dateTimeUpdater(){
//     const dateTimeInfo = new Date();
//     const day = dateTimeInfo.getDay();
//     const date = dateTimeInfo.getDate();
//     const month = dateTimeInfo.getMonth();
//     const year = dateTimeInfo.getFullYear();
//     const hours = dateTimeInfo.getHours();
//     const minutes = dateTimeInfo.getMinutes();
//     const seconds = dateTimeInfo.getSeconds();

//     document.getElementById('day-rn').innerText = dayNumToStr(day);
//     document.getElementById('date-rn').innerHTML = monthNumToStr(month +1) + " " + date + "<sup>" + superscriptDay(date) + "</sup>" + ", " + year;
//     document.getElementById('time-rn').innerHTML = convertToZero(convertHours(hours)) + ":" + convertToZero(minutes) + ":" + convertToZero(seconds) + "<a>" + AMorPM(hours) + "</a>";

//     setTimeout(() => { dateTimeUpdater(); }, 500);
// }