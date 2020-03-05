import React, { Component }  from "react";
import ReactPlayer from 'react-player';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";
import moment from "moment";

import { styles } from "./style";

class VideoInMove extends Component {

	constructor() {
    	super();
	} 

	render() {
	const { classes,video,autoplayName,pause,play,muted,playing } = this.props;

    return (
	  	<div className={classes.container}>
			<video
				id={autoplayName}
		        src={video}
		        onPlay={play}
		        onPause={pause}
		        controls={true}
		        height="80%"
				width="80%"
				muted={muted}
		      />
	      </div>

	  	);
	  }  
}

export default withStyles(styles)(VideoInMove);
