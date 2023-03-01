import assert from "assert";
import {default as formatDate} from "../src/formatDate.js";

it("formatDate", () => {

  const days = [], months = [], years = [];
  for (let i = 2; i <= 12; i++) {
    const zeroPad = i < 10 ? `0${i}` : i;
    days.push(new Date(`01/${zeroPad}/2020`));
    months.push(new Date(`${zeroPad}/01/2020`));
    years.push(new Date(`01/01/20${zeroPad}`));
  }

  assert.strictEqual("Feb 2020", formatDate(months[0], months), "starting month includes year");
  assert.strictEqual("Jun", formatDate(months[4], months), "middle month excludes year");
  assert.strictEqual("Dec 2020", formatDate(months[months.length - 1], months), "ending month includes year");

  assert.strictEqual("Jan 2, 2020", formatDate(days[0], days), "starting day includes year");
  assert.strictEqual("Jan 6", formatDate(days[4], days), "middle day excludes year");
  assert.strictEqual("Jan 12, 2020", formatDate(days[days.length - 1], days), "ending day includes year");

  assert.strictEqual("2002", formatDate(years[0], years), "starting year is year-only");
  assert.strictEqual("2012", formatDate(years[years.length - 1], years), "ending year is year-only");

  const quarters = [
    new Date("03/31/1987"),
    new Date("06/30/1987"),
    new Date("09/30/1987"),
    new Date("12/31/1987"),
    new Date("03/31/1988"),
    new Date("06/30/1988")
  ];

  assert.strictEqual("Q1 1987", formatDate(quarters[0], quarters), "starting quarter includes year");
  assert.strictEqual("Q2", formatDate(quarters[1], quarters), "middle quarter excludes year");
  assert.strictEqual("Q2 1988", formatDate(quarters[quarters.length - 1], quarters), "ending quarter includes year");

});
