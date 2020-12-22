import abbreviate from "./abbreviate";
import {format} from "d3-format";

/**
    @function formatAbbreviate
    @desc An extension to d3's [format](https://github.com/d3/d3-format#api-reference) function that adds more string formatting types and localizations.

The new specifier strings added by d3plus-format are:
 - `~a` - abbreviated decimal notation with a numeric suffix (ie. "k", "M", "B", etc). This is an alias of the `formatAbbreviate` function.
    @param {String} specifier The string specifier used by the format function.
    @returns {Function}
*/
export default specifier => {
  if (specifier === "~a") return abbreviate;
  return format(specifier);
};
