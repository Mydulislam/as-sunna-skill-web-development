/*=====================================================================================
Javascript Date function
There are 4 ways to created with the new Date object
i) new Date()
ii) new Date(year, month, days, hours, minutes, seconds, milliseconds) 
iii) new Date(millisoconds)
iv) new Date(date string)
=======================================================================================*/

// Basic usage Date
let currentDate = new Date();
console.log(currentDate);

let currentDate1 = new Date(2018,11,24,10,33,30,0);
console.log(currentDate1);

let dateStart = new Date(0);
console.log(dateStart);

/*====================================================================================
    Javascript Date Get Methods
    1) getFullYear()
    2) getMonth()
    3) getDate()
    4) getHours()
    5) getMinute()
    6) getSecond()
    7) getMilliseconds()
    8) getTime()
    9) getDay()
    10) Date.now()
======================================================================================*/


/* =================================================================================
    1) Date Method: getFullYear()
====================================================================================*/
let date1 = new Date();
let fullYear = date1.getFullYear();
console.log(fullYear);

/* =================================================================================
    2) Date Method: getMonth()
====================================================================================*/
let date2 = new Date();
let getMonth = date2.getMonth();
console.log(getMonth + 1);

let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(month[getMonth]);


/* =================================================================================
    3) Date Method: getDate()
====================================================================================*/
let date3 = new Date();
let getDate = date3.getDate();
console.log(getDate);


/* =================================================================================
    4) Date Method: getHours()
====================================================================================*/
let date4 = new Date();
let getHours = date4.getHours();
console.log(getHours);


/* =================================================================================
    5) Date Method: getMinutes()
====================================================================================*/
let date5 = new Date();
let getMinute = date5.getMinutes();
console.log(getMinute);


/* =================================================================================
    6) Date Method: getSeconds()
====================================================================================*/
let date6 = new Date();
let getSeconds = date6.getSeconds();
console.log(getSeconds);


/* =================================================================================
    7) Date Method: getMilliSeconds()
====================================================================================*/
let date7 = new Date();
let getMilliSeconds = date7.getMilliseconds();
console.log(getMilliSeconds);


/* =================================================================================
    8) Date Method: getDay()
====================================================================================*/
let date8 = new Date();
let getDay = date8.getDay();
console.log(getDay);
let dayFull = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
console.log(dayFull[getDay]);


/* =================================================================================
    9) Date Method: getTime()
====================================================================================*/
let date9 = new Date();
let getTime = date9.getTime();
console.log(getTime);
console.log(new Date(getTime));




