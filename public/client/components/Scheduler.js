import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Dialog from 'material-ui/Dialog';

const styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400,
  },
  block: {
    display: 'flex',
  },
  block2: {
    margin: 10,
  },
};

function setTime(time) {
  var times = {
  'Morning': {min: 8, max:12 }, 
  'Afternoon': {min:12, max:17}, 
  'Evening': {min: 17, max: 21}, 
  'Night': { min: 21, max: 24 }
  };

  // console.log(times[time].min);
  //generate a random time to schedule 
  var randomTime = Math.floor(Math.random() * (times[time].max - times[time].min + 1) + times[time].min);
  
  //add to time 30 (8.5 = 8:30 AM, 15.5 = 3:30 PM )
   if (Math.floor(Math.random()*2) === 1) {
    return randomTime.toString() + ':30'
   } else {
    return randomTime.toString() + ':00'
   }
};

export default class SchedulePopOver extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      label: 'Schedule for Later',
      time: '',
      schedule: false,
    };
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClickTime(event) {
    event.preventDefault();
    this.setState({
      time: event.target.innerText,
    });

  }
  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  handleCancel() {
    this.setState({
      time: '',
      open: false,
    })
  }
  handleConfirm(event) {
    const { onSchedule, tweet } = this.props;
    event.preventDefault();
    tweet.schedule = setTime(this.state.time);

    this.setState({
      label: 'Scheduled for ' + this.state.time,
      open: false,
      scheduled: true,
    })
    onSchedule();
  }
  render() {
    return (
      <div>
        <FlatButton
          onTouchTap={this.handleTouchTap.bind(this)}
          label={this.state.label}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal:"right",vertical:"top"}}
          targetOrigin={{horizontal:"left",vertical:"top"}}

          onRequestClose={this.handleRequestClose.bind(this)}
        >
          {this.state.time ?
            <Menu
            onBlur={this.handleCancel.bind(this)}
            >
            <MenuItem primaryText="Schedule" onTouchTap={this.handleConfirm.bind(this)}/>
            <MenuItem primaryText="Cancel" onClick={this.handleCancel.bind(this)}/>
            </Menu>
          : <Menu>
            <MenuItem primaryText="Morning" onClick={this.handleClickTime.bind(this)}/>
            <MenuItem primaryText="Afternoon" onClick={this.handleClickTime.bind(this)}/>
            <MenuItem primaryText="Evening"  onClick={this.handleClickTime.bind(this)}/>
            <MenuItem primaryText="Night" onClick={this.handleClickTime.bind(this)}/>
          </Menu> }
        </Popover>
      </div>
    );
  }
}