import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";

import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';

function Headquarters({ hosts, onUpdateHost, onSetHosts, selectedHostId, onSetSelectedHostId, areas }) {
  const [logs, setLogs] = useState([]);

  function handleAddLog(newLog) {
    setLogs([newLog, ...logs]);
  }

  // console.log('in Headquarters, log: ', logs);

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        {/* Something goes here.... */}
        <ColdStorage hosts={hosts} selectedHostId={selectedHostId} onSetSelectedHostId={onSetSelectedHostId} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={hosts.find(hostElem => hostElem.id === selectedHostId)} 
          hosts={hosts} onUpdateHost={onUpdateHost} 
          areas={areas} 
          onAddLog={handleAddLog} />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel hosts={hosts} onSetHosts={onSetHosts} logs={logs} onAddLog={handleAddLog} />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
