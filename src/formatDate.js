import {timeYear, timeMonth, timeHour, timeMinute, timeSecond} from "d3-time";
import {timeFormat} from "d3-time-format";

const formatHour = timeFormat("%I %p"),
      formatMillisecond = timeFormat(".%L"),
      formatMinute = timeFormat("%I:%M"),
      formatMonth = timeFormat("%b"),
      formatMonthDay = timeFormat("%b %-d"),
      formatMonthDayYear = timeFormat("%b %-d, %Y"),
      formatMonthYear = timeFormat("%b %Y"),
      formatQuarter = timeFormat("Q%q"),
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

  const labelIndex = dataArray.findIndex(a => +a === +d);
  const firstOrLast = labelIndex === 0 || labelIndex === dataArray.length - 1;
  const smallArray = dataArray.length <= 5;

  const [yearlySteps, monthlySteps, dailySteps, hourlySteps] = dataArray.reduce((arr, d, i) => {
    if (i) {
      arr[0].push(d.getFullYear() - dataArray[i - 1].getFullYear());
      arr[1].push(monthDiff(dataArray[i - 1], d));
      arr[2].push(Math.round((d - dataArray[i - 1]) / (1000 * 60 * 60 * 24)));
      arr[3].push(Math.round((d - dataArray[i - 1]) / (1000 * 60 * 60)));
    }
    return arr;
  }, [[], [], [], []]);

  return (
    yearlySteps.every(s => s >= 1 && !(s % 1)) // Yearly Data 
      ? formatYear
    : monthlySteps.every(s => s >= 3 && !(s % 3)) // Quarterly Data
      ? +timeYear(d) === d || firstOrLast || smallArray ? formatQuarterYear : formatQuarter
    : monthlySteps.every(s => s >= 1 && !(s % 1)) // Monthly Data
      ? +timeYear(d) === d || firstOrLast || smallArray ? formatMonthYear : formatMonth 
    : dailySteps.every(s => s >= 1 && !(s % 1)) // Daily Data
      ? +timeYear(d) === d || firstOrLast || smallArray ? formatMonthDayYear : formatMonthDay 
    : hourlySteps.every(s => s >= 1 && !(s % 1)) // Hourly Data
      ? firstOrLast || smallArray ? formatMonthDayYear : +timeMonth(d) === d ? formatMonthDay : formatHour
    : timeSecond(d) < d ? formatMillisecond
    : timeMinute(d) < d ? formatSecond
    : timeHour(d) < d ? formatMinute : d
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
