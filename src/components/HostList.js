import React from "react";
import { Card } from "semantic-ui-react";

import Host from './Host';

function HostList({ hosts, selectedHostId, onSetSelectedHostId }) {
  const dispHosts = hosts.map(hostElem => 
    (<Host key={hostElem.id} host={hostElem} 
      isSelected={hostElem.id === selectedHostId} onSetSelectedHostId={onSetSelectedHostId} />));

  return (
    <Card.Group itemsPerRow={6}>
      {
        /* What do you think, partner? */
        dispHosts
      }
    </Card.Group>
  );
}

export default HostList;
