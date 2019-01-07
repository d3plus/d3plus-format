import {format} from "d3-format";

/**
    @function formatAbbreviate
    @desc Formats a number to an appropriate number of decimal places and rounding, adding suffixes if applicable (ie. `1200000` to `"1.2M"`).
    @param {Number} n The number to be formatted.
    @returns {String}
*/
export default function(n) {
  if (typeof n !== "number") return "N/A";
  const length = n.toString().split(".")[0].replace("-", "").length;
  let val;
  if (n === 0) val = "0";
  else if (length >= 3) {
    const f = format(".3s")(n)
      .replace("G", "B")
      .replace("T", "t")
      .replace("P", "q")
      .replace("E", "Q");
    const num = f.slice(0, -1);
    const char = f.slice(f.length - 1);
    val = `${parseFloat(num)}${char}`;
  }
  else if (length === 3) val = format(",f")(n);
  else if (n < 1 && n > -1) val = format(".2g")(n);
  else val = format(".3g")(n);

  return val
    .replace(/(\.[1-9]*)[0]*$/g, "$1") // removes any trailing zeros
    .replace(/[.]$/g, ""); // removes any trailing decimal point
}
