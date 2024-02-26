import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

// Mock Data
const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: `Lukas Souza`
  }
];

class Dashboard extends Component {
  state = { 
    loading: false,
    focused: null
  }

  selectPanel(id) {
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  }
  
  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });


    if (this.state.loading) {
      return <Loading />
    }

    const mappedData = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
      .map(panelData => (
        <Panel 
          key={panelData.id}
          label={panelData.label}
          value={panelData.value}
          onSelect={event => this.selectPanel(panelData.id)}
        />
    ));

    

    return <main className={dashboardClasses}>{mappedData}</main>;
  }
}

export default Dashboard;
