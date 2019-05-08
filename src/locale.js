/**
    @namespace {Object} formatLocale
    @desc A set of default locale formatters used when assigning suffixes and currency in numbers.
      *
      * | Name | Default | Description |
      * |---|---|---|
      * | separator | "" | Separation between the number with the suffix. |
      * | suffixes | [] | List of suffixes used to format numbers. |
      * | grouping | [3] | The array of group sizes, |
      * | delimiters | {thousands: ",", decimal: "."} | Decimal and group separators. |
      * | currency | ["$", ""] | The currency prefix and suffix. |
*/

export default {
  "en-GB": {
    separator: "",
    suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "B", "t", "q", "Q", "Z", "Y"],
    grouping: [3],
    delimiters: {
      thousands: ",",
      decimal: "."
    },
    currency: ["£", ""]
  },
  "en-US": {
    separator: "",
    suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "B", "t", "q", "Q", "Z", "Y"],
    grouping: [3],
    delimiters: {
      thousands: ",",
      decimal: "."
    },
    currency: ["$", ""]
  },
  "es-ES": {
    separator: "",
    suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "mm", "b", "t", "q", "Q", "Z", "Y"],
    grouping: [3],
    delimiters: {
      thousands: ".",
      decimal: ","
    },
    currency: ["€", ""]
  },
  "es-CL": {
    separator: "",
    suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "B", "t", "q", "Q", "Z", "Y"],
    grouping: [3],
    delimiters: {
      thousands: ".",
      decimal: ","
    },
    currency: ["$", ""]
  },
  "et-EE": {
    separator: " ",
    suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "tuhat", "miljonit", "miljardit", "triljonit", "q", "Q", "Z", "Y"],
    grouping: [3],
    delimiters: {
      thousands: " ",
      decimal: ","
    },
    currency: ["", "eurot"]
  },
  "fr-FR": {
    suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "m", "b", "t", "q", "Q", "Z", "Y"],
    grouping: [3],
    delimiters: {
      thousands: " ",
      decimal: ","
    },
    currency: ["€", ""]
  }
};
