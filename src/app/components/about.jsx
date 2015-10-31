'use strict';

import React from 'react';
import RaisedButton  from 'material-ui/lib/raised-button';
import { DatePicker } from 'material-ui/lib/date-picker';

export const About = React.createClass({
  getInitialState() {

    let minDate = new Date();
    let maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() -1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() +1);
    maxDate.setHours(0, 0, 0, 0);

    let state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      controlledDate: new Date('2015/07/15'),
    };
    return state;
  },
  render() {
    return (<div>
      <h1>About</h1>
      <DatePicker
  hintText="Ranged Date Picker"
  autoOk={this.state.autoOk}
  minDate={this.state.minDate}
  maxDate={this.state.maxDate}
  showYearSelector={this.state.showYearSelector} />
      
    </div>
    );
  }
});

export default About;
