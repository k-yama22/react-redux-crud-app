import React, { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { readEvents } from "../actions";

const EventsIndex = (props) => {
  useEffect(
    () => {
      console.log("useEffectよ");
      props.readEvents();
    },
    [
      /* 任意の変数 */
    ]
  );

  const renderEvents = () => {
    return _.map(props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{renderEvents()}</tbody>
      </table>
      <div></div>
    </>
  );
};

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
