import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ host, hosts, onUpdateHost, areas }) {
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  // const [options] = useState([
  //   { key: "some_area", text: "Some Area", value: "some_area" },
  //   { key: "another_area", text: "Another Area", value: "another_area" },
  // ]);

  // const [value] = useState("some_area");

  // bkj - If I make this option as a state, it doesn't get updated to the initial value. Why???
  const options = areas.map(areaElem => {
    return {
      key: areaElem.name,
      text: areaElem.name.split('_').map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(' '),
      value: areaElem.name,
    };
  });

  console.log('in HostInfo, host area: ', host.area, ', options: ', options);
  console.log('in HostInfo, host: ', host);

  function handleOptionChange(e, { value }) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled

    const currCnt = hosts.reduce((total, hostElem) => {
      if (hostElem.area === value) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    const area = areas.find(areaElem => areaElem.name === value);

    if (currCnt >= area.limit) {
      console.log("Can't change area. The area will exceed its limit!!!");
      return;
    }

    console.log('in Hostinfo, handleOptionChange, e: ', e, ', value: ', value);
    fetch(`http://localhost:3001/hosts/${host.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        area: value,
      }),
    })
    .then(resp => resp.json())
    .then(data => onUpdateHost(data));
  }

  function handleRadioChange() {
    console.log("The radio button fired");
    fetch(`http://localhost:3001/hosts/${host.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        active: !host.active,
      }),
    })
    .then(resp => resp.json())
    .then(data => onUpdateHost(data));
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={/* pass in the right image here */ host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} | {host.gender === 'Male' ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={host.active ? 'Active' : 'Decommissioned'}
                checked={host.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={host.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
