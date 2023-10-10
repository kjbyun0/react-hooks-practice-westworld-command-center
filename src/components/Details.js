import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";

import HostInfo from './HostInfo';

function Details({ host, hosts, onUpdateHost, areas, onAddLog }) {
  // console.log('in Details, host: ', host);

  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  return (
    <Segment id="details" className="HQComps">
      {!host ? 
        <Image size="medium" src={Images.westworldLogo} /> : 
        <HostInfo host={host} hosts={hosts} onUpdateHost={onUpdateHost} areas={areas} onAddLog={onAddLog} />}
    </Segment>
  );
}

export default Details;
