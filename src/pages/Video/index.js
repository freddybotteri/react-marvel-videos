import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import get from "lodash/get";

import VideoInMove from "./components/VideoInMove";
import { styles } from "./style";

import Video1 from "../../videos/MusicBox.mp4";
import Video2 from "../../videos/Vietnam.mp4";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      
      totalMute: '',
      runVideo1: 'video1',
      runVideo2: 'video2',
      silenceVideo1: 'muted',
      silenceVideo1: 'noMuted',
      actionActive: '',
      howWasPress: '',
      playing: 'autoPlay'
    };

    this.handleEventPlay = this.handleEventPlay.bind(this);
    this.handleEventPause = this.handleEventPause.bind(this);
    this.handleMuteAll = this.handleMuteAll.bind(this);

  }

  handlePlayVideo(e) {
    console.log('play desde una funcion');
  };

  handleOnlyOneVideoPlayer(pressVideoNumber,actionExe) {
        if(pressVideoNumber == 'video1' && actionExe ==  'Play')  {
          document.getElementById("video2").pause();
        }else if(pressVideoNumber == 'video1' && actionExe ==  'Pause')  {

        }else if(pressVideoNumber == 'video2' && actionExe ==  'Play')  {
          document.getElementById("video1").pause();
        }else if(pressVideoNumber == 'video2' && actionExe ==  'Pause')  {

        } 
  };

  handleEventPlay(evt) {
    this.setState({howWasPress: evt.target.id});
    this.setState({actionActive: 'Play'});
    this.handleOnlyOneVideoPlayer(evt.target.id,'Play');
  };

  handleEventPause(evt) {
    this.setState({howWasPress: evt.target.id});
    this.setState({actionActive: 'Pause'});
    this.handleOnlyOneVideoPlayer(evt.target.id,'Pause');
  };

  handleMuteAll() {
      this.setState({silenceVideo1: 'muted'});
      this.setState({silenceVideo2: 'muted'});
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.root} spacing={1}>
        <Grid container >
          <Grid item xs={6}>
           <Button variant="contained" className={classes.mute} onClick={this.handleMuteAll} color="secondary">
              MUTE
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <VideoInMove
           video={Video1}
           autoplayName={this.state.runVideo1}
           pause={this.handleEventPause}
           play={this.handleEventPlay}
           muted={this.state.silenceVideo1}
           playing={this.state.playing}
           />
        </Grid>
        <Grid item xs={6}>
          <VideoInMove 
          video={Video2}
           autoplayName={this.state.runVideo2}
           pause={this.handleEventPause}
           play={this.handleEventPlay}
           muted={this.state.silenceVideo2}
           playing={this.state.playing}
           />
        </Grid>
      </Grid>
    );
  }
}


export default withStyles(styles)(Video);

