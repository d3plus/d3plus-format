import {test} from "zora";
import {default as formatDate} from "../src/formatDate.js";

test("formatDate", assert => {

  const days = [], months = [];
  for (let i = 2; i <= 12; i++) {
    days.push(new Date(`01/${i < 10 ? `0${i}` : i}/2020`));
    months.push(new Date(`${i < 10 ? `0${i}` : i}/01/2020`));
  }

  assert.equal("Feb 2020", formatDate(months[0], months), "starting month includes year");
  assert.equal("Jun", formatDate(months[4], months), "middle month excludes year");

  assert.equal("Jan 2, 2020", formatDate(days[0], days), "starting day includes month and year");
  assert.equal("6", formatDate(days[4], days), "middle day excludes month and year");

});

export default test;
