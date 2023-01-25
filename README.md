# d3plus-format

Shorthand formatters for common number types.

## Installing

If using npm, `npm install d3plus-format`. Otherwise, you can download the [latest release from GitHub](https://github.com/d3plus/d3plus-format/releases/latest) or load from a [CDN](https://cdn.jsdelivr.net/npm/d3plus-format@1).

```js
import modules from "d3plus-format";
```

d3plus-format can be loaded as a standalone library or bundled as part of [D3plus](https://github.com/d3plus/d3plus). ES modules, AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3plus` global is exported:

```html
<script src="https://cdn.jsdelivr.net/npm/d3plus-format@1"></script>
<script>
  console.log(d3plus);
</script>
```

## Examples

Live examples can be found on [d3plus.org](https://d3plus.org/), which includes a collection of example visualizations using [d3plus-react](https://github.com/d3plus/d3plus-react/). These examples are powered by the [d3plus-storybook](https://github.com/d3plus/d3plus-storybook/) repo, and PRs are always welcome. :beers:

## API Reference

##### 
* [format](#format) - An extension to d3's [format](https://github.com/d3/d3-format#api-reference) function that adds more string formatting types and localizations.

The new specifier strings added by d3plus-format are:
 - `.3~a` - abbreviated decimal notation with a numeric suffix (ie. "k", "M", "B", etc). This is an alias of the `formatAbbreviate` function.
* [formatAbbreviate](#formatAbbreviate) - Formats a number to an appropriate number of decimal places and rounding, adding suffixes if applicable (ie. `1200000` to `"1.2M"`).
* [formatDate](#formatDate) - A default set of date formatters, which takes into account both the interval in between in each data point but also the start/end data points.
* [formatDefaultLocale](#formatDefaultLocale) - An extension to d3's [formatDefaultLocale](https://github.com/d3/d3-format#api-reference) function that allows setting the locale globally for formatters.

##### 
* [formatLocale](#formatLocale) - A set of default locale formatters used when assigning suffixes and currency in numbers.

| Name | Default | Description |
|---|---|---|
| separator | "" | Separation between the number with the suffix. |
| suffixes | [] | List of suffixes used to format numbers. |
| grouping | [3] | The array of group sizes, |
| delimiters | {thousands: ",", decimal: "."} | Decimal and group separators. |
| currency | ["$", ""] | The currency prefix and suffix. |

---

<a name="format"></a>
#### d3plus.**format**(specifier) [<>](https://github.com/d3plus/d3plus-format/blob/master/src/format.js#L4)

An extension to d3's [format](https://github.com/d3/d3-format#api-reference) function that adds more string formatting types and localizations.

The new specifier strings added by d3plus-format are:
 - `.3~a` - abbreviated decimal notation with a numeric suffix (ie. "k", "M", "B", etc). This is an alias of the `formatAbbreviate` function.


This is a global function.

---

<a name="formatAbbreviate"></a>
#### d3plus.**formatAbbreviate**(n, locale) [<>](https://github.com/d3plus/d3plus-format/blob/master/src/formatAbbreviate.js#L38)

Formats a number to an appropriate number of decimal places and rounding, adding suffixes if applicable (ie. `1200000` to `"1.2M"`).


This is a global function.

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> \| <code>String</code> | The number to be formatted. |
| locale | <code>Object</code> \| <code>String</code> | The locale config to be used. If *value* is an object, the function will format the numbers according the object. The object must include `suffixes`, `delimiter` and `currency` properties. |


---

<a name="formatDate"></a>
#### d3plus.**formatDate**(d, dataArray) [<>](https://github.com/d3plus/d3plus-format/blob/master/src/formatDate.js#L16)

A default set of date formatters, which takes into account both the interval in between in each data point but also the start/end data points.


This is a global function.

| Param | Type | Description |
| --- | --- | --- |
| d | <code>Date</code> | The date string to be formatted. |
| dataArray | <code>Array</code> | The full array of ordered Date Objects. |


---

<a name="formatDefaultLocale"></a>
#### d3plus.**formatDefaultLocale**(definition) [<>](https://github.com/d3plus/d3plus-format/blob/master/src/formatDefaultLocale.js#L4)

An extension to d3's [formatDefaultLocale](https://github.com/d3/d3-format#api-reference) function that allows setting the locale globally for formatters.


This is a global function.

---

<a name="formatLocale"></a>
#### **formatLocale** [<>](https://github.com/d3plus/d3plus-format/blob/master/src/locale.js#L1)

A set of default locale formatters used when assigning suffixes and currency in numbers.

| Name | Default | Description |
|---|---|---|
| separator | "" | Separation between the number with the suffix. |
| suffixes | [] | List of suffixes used to format numbers. |
| grouping | [3] | The array of group sizes, |
| delimiters | {thousands: ",", decimal: "."} | Decimal and group separators. |
| currency | ["$", ""] | The currency prefix and suffix. |


This is a global namespace.

---



###### <sub>Documentation generated on Wed, 25 Jan 2023 12:28:57 GMT</sub>
