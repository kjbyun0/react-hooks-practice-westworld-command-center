import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";

import WestworldMap from './WestworldMap';
import Headquarters from './Headquarters';

function App() {
  const [hosts, setHosts] = useState([]);
  // bkj - is it better to store selected host object instead of selected host's id???
  const [selectedHostId, setSelectedHostId] = useState(null);

  // bkj - Does it need to be saved as a state???
  const [areas, setAreas] = useState([]);

  function handleUpdateHost(hostObj) {
    setHosts(hosts.map(hostElem => {
      if (hostElem.id === hostObj.id) {
        return hostObj;
      } else {
        return hostElem;
      }
    }));
  }

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(resp => resp.json())
    .then(data => setHosts([...data]));

    fetch('http://localhost:3001/areas')
    .then(resp => resp.json())
    .then(data => setAreas([...data]));
  }, []);

  console.log('in App, areas: ', areas, 'hosts: ', hosts);

  return (
    <Segment id="app">
      {
        /* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */
      }
      <WestworldMap areas={areas} 
        hosts={hosts} 
        selectedHostId={selectedHostId} onSetSelectedHostId={setSelectedHostId} />
      <Headquarters hosts={hosts} selectedHostId={selectedHostId} onSetSelectedHostId={setSelectedHostId}
        onUpdateHost={handleUpdateHost} areas={areas} />
    </Segment>
  );
}

export default App;
