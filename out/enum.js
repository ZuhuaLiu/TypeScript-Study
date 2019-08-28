"use strict";
/*
 * @Author: Zuhua Liu
 * @Date: 2019-08-26 15:08:45
 * @Last Modified by: Zuhua Liu
 * @Last Modified time: 2019-08-26 15:19:17
 */
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
    DaysOfWeek[DaysOfWeek["THU"] = 4] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 5] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 6] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
var day;
day = DaysOfWeek.SUN;
console.log(day);
