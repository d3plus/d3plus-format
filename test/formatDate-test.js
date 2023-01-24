import assert from "assert";
import {default as formatDate} from "../src/formatDate.js";

it("formatDate", () => {

  const days = [], months = [];
  for (let i = 2; i <= 12; i++) {
    days.push(new Date(`01/${i < 10 ? `0${i}` : i}/2020`));
    months.push(new Date(`${i < 10 ? `0${i}` : i}/01/2020`));
  }

  assert.strictEqual("Feb 2020", formatDate(months[0], months), "starting month includes year");
  assert.strictEqual("Jun", formatDate(months[4], months), "middle month excludes year");

  assert.strictEqual("Jan 2, 2020", formatDate(days[0], days), "starting day includes month and year");
  assert.strictEqual("6", formatDate(days[4], days), "middle day excludes month and year");

  const quarters = [
    new Date("03/31/1987"),
    new Date("06/30/1987"),
    new Date("09/30/1987"),
    new Date("12/31/1987"),
    new Date("03/31/1988")
  ];

  assert.strictEqual("Q2 1987", formatDate(quarters[1], quarters), "quarterly data");

});
