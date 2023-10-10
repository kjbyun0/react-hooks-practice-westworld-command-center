import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";

import ColdStorage from './ColdStorage';

function Headquarters({ hosts, selectedHostId, onSetSelectedHostId, onUpdateHost, areas }) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        {
          /* Something goes here.... */
          <ColdStorage hosts={hosts} selectedHostId={selectedHostId} onSetSelectedHostId={onSetSelectedHostId} />
        }
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={hosts.find(hostElem => hostElem.id === selectedHostId)} hosts={hosts} onUpdateHost={onUpdateHost} areas={areas} />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
