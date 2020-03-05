import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";
import moment from "moment";

import { styles } from "./style";

const HeroDescription = ({ classes, description, name, id ,thumbnail}) => (
  <Card key={id} className={classes.cardContainer}>
    <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail.path+"/standard_xlarge."+thumbnail.extension}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
  </Card>
);

export default withStyles(styles)(HeroDescription);
