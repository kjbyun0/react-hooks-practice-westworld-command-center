import React from "react";
import "../stylesheets/Area.css";

import HostList from './HostList';

function Area({ name, limit, hosts, selectedHostId, onSetSelectedHostId }) {
  return (
    <div
      className="area"
      id={
        /* Pass in the area name here to make sure this is styled correctly */
        name
      }
    >
      <h3 className="labels">
        {
          /* Don't just pass in the name from the data...clean that thing up */
          name.split('_').map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(' ')
        }
      </h3>
      {
        /* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */
        <HostList hosts={hosts.filter(hostElem => hostElem.active)} 
          selectedHostId={selectedHostId} onSetSelectedHostId={onSetSelectedHostId} />
      }
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
