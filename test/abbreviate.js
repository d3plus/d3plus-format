import {test} from "zora";
import {default as abbreviate} from "../src/abbreviate.js";

test("abbreviate", assert => {

  assert.equal("1.23Q", abbreviate(1234567890000000000), "quintillion");
  assert.equal("1.23q", abbreviate(1234567890000000), "quadrillion");
  assert.equal("1.23t", abbreviate(1234567890000), "trillion");
  assert.equal("1.23B", abbreviate(1234567890), "billion");
  assert.equal("1.23M", abbreviate(1234567), "million");
  assert.equal("123k",  abbreviate(123456), "hundred thousand");
  assert.equal("12.3k", abbreviate(12345), "ten thousand");
  assert.equal("1.23k", abbreviate(1234), "thousand");
  assert.equal("123",   abbreviate(123), "hundred");
  assert.equal("12",    abbreviate(12), "ten");
  assert.equal("1",     abbreviate(1), "single");
  assert.equal("0.12",  abbreviate(0.12), "tenths");
  assert.equal("0.012", abbreviate(0.0123), "hundredths");

  assert.equal("1B",    abbreviate(1000000009), "large - removes trailing zeros and period");
  assert.equal("0.1",   abbreviate(0.1), "small - removes trailing zeros");

  assert.equal("10 miljonit",    abbreviate(10000000, "et-EE"), "estonian locale");
  assert.equal("1,23 triljonit", abbreviate(1234567890000, "et-EE"), "trillion in estonian");
  assert.equal("1mm",      abbreviate(1000000, "es-ES"), "spanish locale");
  assert.equal("1,23t",    abbreviate(1234567890000, "es-ES"), "trillion in spanish");

  assert.equal("0.12", abbreviate(0.12, "en-US"), "decimal format in english");
  assert.equal("0,12", abbreviate(0.12, "et-EE"), "decimal format in estonian");
  assert.equal("1,000", abbreviate(1000, "en-US", ",.4r"), "trillion in english");
  assert.equal("1 000", abbreviate(1000, "et-EE", ",.4r"), "trillion in estonian");

});

export default test;
