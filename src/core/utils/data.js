const moment = require("moment");
const precisePlugin = require("moment-precise-range-plugin");
//import moment from "moment";
//import 'moment-precise-range';
//const moment = require("moment-precise-range");


export const getDataFormat = (date) => {
  return moment(date).format("MMM Do YY");
};

export const getPreciseDateDifference = (date1, date2) => {
  const date1Format = moment(date1);
  const date2Format = moment(date2);
  return moment.preciseDiff(date1Format, date2Format);
};
