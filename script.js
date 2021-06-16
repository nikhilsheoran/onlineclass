function timeAsNum(e,t,n){return 1e4*e+100*t+n}const timeTable={Monday:["English","Chemistry","Physics","Maths","Computer"],Tuesday:["English","Chemistry","Physics","Maths","Computer"],Wednesday:["English","Chemistry","Physics","Maths","Computer"],Thursday:["English","Chemistry","Physics","Maths","Computer"],Friday:["Chemistry","English","Physics","Maths","Computer"]},classLink={CTBlock:"https://us04web.zoom.us/j/5556312068?pwd=bHUzSjBZTytoNC9hOEpKUlM0cDNnUT09",English:"https://us04web.zoom.us/j/2642201759?pwd=N2loYnhwWDJTdG5TKzNiUndEQlc0dz09",Physics:"https://us04web.zoom.us/j/5556312068?pwd=bHUzSjBZTytoNC9hOEpKUlM0cDNnUT09",Chemistry:"https://us02web.zoom.us/j/7523800259?pwd=bkxFSS9PRzF4Q1M0VVdvNG9BcG9mQT09",Maths:"zoommtg://us04web.zoom.us/j/6224028817?pwd=YnlaYVZYeXgzcU8yQ3poNjJPL0V4Zz09",Computer:"https://us04web.zoom.us/j/5853556094?pwd=i6MWQ9g2m6xaarxCj-4QPwBjuZR6"},blockStartTimings={start:timeAsNum(7,30,0),Block1:timeAsNum(8,55,0),Block2:timeAsNum(9,40,0),Block3:timeAsNum(10,30,0),Block4:timeAsNum(11,20,0),Block5:timeAsNum(12,10,0),end:timeAsNum(13,0,0)};function timeAsNum(e,t,n){return 1e4*e+100*t+n}function blockNum(){const e=(new Date).getSeconds(),t=(new Date).getMinutes(),n=(new Date).getHours(),s=timeAsNum(n,t,e),c=blockStartTimings.start,o=blockStartTimings.Block1,r=blockStartTimings.Block2,i=blockStartTimings.Block3,u=blockStartTimings.Block4,a=blockStartTimings.Block5,m=blockStartTimings.end;return s>=c&&s<o?10:s>=o&&s<r?0:s>=r&&s<i?1:s>=i&&s<u?2:s>=u&&s<a?3:s>=a&&s<m?4:10}function className(e){const t=(new Date).getDay();return 10===e||t>=6?"CTBlock":timeTable[dayNumToStr(t)][e]}let initialClass=className(blockNum()),checknum=1,checknum2=1;function readTimeTable(){const e=className(blockNum());return e!=initialClass&&(document.getElementById("join-btn-rn").outerHTML=document.getElementById("join-btn-rn").outerHTML,initialClass=e,checknum2=1),1===checknum&&(document.getElementById("english-btn").addEventListener("click",()=>{newTab=window.open(classLink.English),setTimeout(()=>{newTab.close()},1e4)}),document.getElementById("physics-btn").addEventListener("click",()=>{newTab=window.open(classLink.Physics),setTimeout(()=>{newTab.close()},1e4)}),document.getElementById("chemistry-btn").addEventListener("click",()=>{newTab=window.open(classLink.Chemistry),setTimeout(()=>{newTab.close()},1e4)}),document.getElementById("maths-btn").addEventListener("click",()=>{newTab=window.open(classLink.Maths),setTimeout(()=>{newTab.close()},1e4)}),document.getElementById("computer-btn").addEventListener("click",()=>{newTab=window.open(classLink.Computer),setTimeout(()=>{newTab.close()},1e4)}),checknum++),blockNum()>=0&&blockNum()<=4&&"CTBlock"!=e?(1===checknum2&&(document.getElementById("join-btn-rn").addEventListener("click",()=>{newTab=window.open(classLink[e]),setTimeout(()=>{newTab.close()},1e4)}),checknum2++),e):(1===checknum2&&(document.getElementById("join-btn-rn").addEventListener("click",()=>{newTab=window.open(classLink.CTBlock),setTimeout(()=>{newTab.close()},1e4)}),checknum2++),"Class Teacher Block")}function convertHours(e){return e<=12?e:e-12}function convertToZero(e){return e<10?"0"+e:e}function AMorPM(e){return e<12?"AM":"PM"}function dayNumToStr(e){switch(e){case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";case 0:return"Sunday"}}function monthNumToStr(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December"}}function superscriptDay(e){switch(e){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function dateTimeUpdater(){const e=new Date,t=e.getDay(),n=e.getDate(),s=e.getMonth(),c=e.getFullYear(),o=e.getHours(),r=e.getMinutes(),i=e.getSeconds();document.getElementById("day-rn").innerText=dayNumToStr(t),document.getElementById("date-rn").innerHTML=monthNumToStr(s+1)+" "+n+"<sup>"+superscriptDay(n)+"</sup>, "+c,document.getElementById("time-rn").innerHTML=convertToZero(convertHours(o))+":"+convertToZero(r)+":"+convertToZero(i)+"<a>"+AMorPM(o)+"</a>",setTimeout(()=>{dateTimeUpdater()},500)}function mainFunction(){document.getElementById("join-btn-rn").innerText=readTimeTable(),setTimeout(()=>{mainFunction()},500)}dateTimeUpdater(),mainFunction();
