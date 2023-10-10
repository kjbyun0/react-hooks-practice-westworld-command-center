import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ hosts, onSetHosts, logs, onAddLog }) {
  const isAllActive= hosts.reduce((res, hostElem) => res && hostElem.active, true);

  function handleToggleActiveAll() {
    onSetHosts(hosts.map(hostElem => {
      if (hostElem.active === isAllActive) {
        hostElem.active = !hostElem.active;
      }
      return hostElem;
    }));

    isAllActive ? 
      onAddLog(Log.notify('Decommissiong all hosts.')) : 
      onAddLog(Log.warn('Activating  all hosts!'));
  }

  // console.log('in LogPanel, isAllActive: ', isAllActive);

/*
  function dummyLogs() {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = [];

    logs.unshift(Log.warn("This is an example of a warn log"));
    logs.unshift(Log.notify("This is an example of a notify log"));
    logs.unshift(Log.error("This is an example of an error log"));

    return logs;
  }
*/

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {/* {dummyLogs().map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))} */}
        {
          logs.map((log, i) => (
            <p key={i} className={log.type}>
              {log.msg}
            </p>
          ))
        }
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color...*/}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      <Button fluid color={isAllActive ? "green" : "red"} content={isAllActive ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        onClick={handleToggleActiveAll} />
    </Segment>
  );
}

export default LogPanel;
