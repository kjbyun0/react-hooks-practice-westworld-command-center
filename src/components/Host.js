import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, isSelected, onSetSelectedHostId }) {
  // console.log('in Host, name: ', `${host.firstName} ${host.lastName}`, ', isSelected: ', isSelected);

  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={isSelected ? 'host selected' : 'host'}
      onClick={/* On Click what? */ () => onSetSelectedHostId(host.id)}
      image={/* I wonder what goes here...*/ host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
