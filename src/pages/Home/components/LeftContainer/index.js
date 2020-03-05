import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

const LeftContainer = ({
  saludos
}) => (
  <div>
    <Typography>{saludos}</Typography>
  </div>
);

export { LeftContainer };

export default withStyles(styles)(LeftContainer);
