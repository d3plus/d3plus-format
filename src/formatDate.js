import {timeYear, timeMonth, timeDay, timeHour, timeMinute, timeSecond} from "d3-time";
import {timeFormat} from "d3-time-format";

const formatHour = timeFormat("%I %p"),
      formatMillisecond = timeFormat(".%L"),
      formatMinute = timeFormat("%I:%M"),
      formatMonth = timeFormat("%b"),
      formatMonthDay = timeFormat("%b %-d"),
      formatMonthDayYear = timeFormat("%b %-d, %Y"),
      formatMonthYear = timeFormat("%b %Y"),
      formatQuarterYear = timeFormat("Q%q %Y"),
      formatSecond = timeFormat(":%S"),
      formatYear = timeFormat("%Y");

/**
    @function formatDate
    @desc A default set of date formatters, which takes into account both the interval in between in each data point but also the start/end data points.
    @param {Date} d The date string to be formatted.
    @param {Array} dataArray The full array of ordered Date Objects.
    @returns {String}
*/
export default function(d, dataArray) {

  const labelIndex = dataArray.indexOf(d);
  const firstOrLast = labelIndex === 0 || labelIndex === dataArray.length - 1;
  const smallArray = dataArray.length <= 5;
  const c = dataArray[labelIndex + 1] || dataArray[labelIndex - 1];

  const steps = dataArray.reduce((arr, d, i) => {
    if (i) arr.push(monthDiff(dataArray[i - 1], d));
    return arr;
  }, []);
  const quarterSteps = steps.find(s => s === 3) && steps.every(d => d >= 3 && !(d % 3));
  if (quarterSteps) return formatQuarterYear(d);

  return (
    timeSecond(d) < d ? formatMillisecond
    : timeMinute(d) < d ? formatSecond
    : timeHour(d) < d ? formatMinute
    : timeDay(d) < d || neighborInInterval(d, c, timeDay) // Hourly Data
      ? firstOrLast || smallArray ? formatMonthDayYear : +timeMonth(d) === d ? formatMonthDay : formatHour
    : timeMonth(d) < d || neighborInInterval(d, c, timeMonth) // Daily Data
      ? +timeYear(d) === d || firstOrLast || smallArray ? formatMonthDayYear : formatMonthDay 
    : timeYear(d) < d || neighborInInterval(d, c, timeYear) // Monthly Data
      ? +timeYear(d) === d || firstOrLast || smallArray ? formatMonthYear : formatMonth 
    : formatYear
  )(d);

}

/**
    @function monthDiff
    @desc Returns the number of months between two Date objects
    @param {*} d1
    @param {*} d2
    @returns {Number} the number of months between the two Date objects
    @private
*/
function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

/**
    @function neighborInInterval
    @desc Helps determine whether to show the parent level time label, such as "Jan 2020" in a monthly chart (where "Feb"-only would follow)
    @returns {Boolean}
    @private
*/
function neighborInInterval(d, comparitor, interval) {
  return comparitor ? +interval.round(d) === +interval.round(comparitor) : false;
}
