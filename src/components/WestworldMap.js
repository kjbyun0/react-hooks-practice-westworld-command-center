import React from "react";
import { Segment } from "semantic-ui-react";

import Area from './Area';

function WestworldMap({ areas, hosts, selectedHostId, onSetSelectedHostId }) {
  const dispAreas = areas.map(areaElem => 
    (<Area key={areaElem.id} name={areaElem.name} limit={areaElem.limit} 
      hosts={hosts.filter(hostElem => hostElem.area === areaElem.name)} 
      selectedHostId={selectedHostId} onSetSelectedHostId={onSetSelectedHostId}/>));
  //  console.log('in WestworldMap, dispAreas: ', dispAreas);

  return (
    <Segment id="map">
      {
        /* What should we render on the map? */
        dispAreas
      }
    </Segment>
  );
}

export default WestworldMap;
