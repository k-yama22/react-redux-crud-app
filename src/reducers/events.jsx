import _ from "lodash";
import { READ_EVENTS } from "../actions";

export const events = (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
