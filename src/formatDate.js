import {timeYear, timeMonth, timeDay, timeHour, timeMinute, timeSecond} from "d3-time";
import {timeFormat} from "d3-time-format";

/**
    @function formatDate
    @desc A default set of date formatters, which takes into account both the interval in between in each data point but also the start/end data points.
    @param {Date} d The date string to be formatted.
    @param {Array[Date]} dataArray The full array of ordered Date Objects.
    @returns {String}
*/
export default function(d, dataArray) {

  const formatDay = timeFormat("%-d"),
        formatHour = timeFormat("%I %p"),
        formatMillisecond = timeFormat(".%L"),
        formatMinute = timeFormat("%I:%M"),
        formatMonth = timeFormat("%b"),
        formatMonthDay = timeFormat("%b %-d"),
        formatMonthDayYear = timeFormat("%b %-d, %Y"),
        formatMonthYear = timeFormat("%b %Y"),
        formatSecond = timeFormat(":%S"),
        formatYear = timeFormat("%Y");

  const labelIndex = dataArray.indexOf(d);
  const c = dataArray[labelIndex + 1] || dataArray[labelIndex - 1];

  return (timeSecond(d) < d ? formatMillisecond
    : timeMinute(d) < d ? formatSecond
    : timeHour(d) < d ? formatMinute
    : timeDay(d) < d ? labelIndex === 0 ? formatMonthDayYear : formatHour
    : timeMonth(d) < d ? labelIndex === 0 ? formatMonthDayYear : neighborInInterval(d, c, timeDay) ? formatMonthDay : formatDay
    : timeYear(d) < d ? labelIndex === 0 ? formatMonthYear : neighborInInterval(d, c, timeMonth) ? formatMonthDay : formatMonth
    : neighborInInterval(d, c, timeYear) ? formatMonthYear : formatYear)(d);

}

/**
    @function neighborInInterval
    @desc Helps determine whether to show the parent level time label, such as "Jan 2020" in a monthly chart (where "Feb"-only would follow)
    @returns {Boolean}
    @private
*/
function neighborInInterval(d, comparitor, interval) {
  return comparitor ? +interval.round(d) === +interval.round(d + Math.abs(comparitor - d))  : false;
}
