import _ from "lodash";
import moment from "moment";

export default function (items) {
  items = _.sortBy(items, function (o) {
    return new moment(o.createdAt);
  }).reverse();

  return items;
}
