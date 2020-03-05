import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";
import moment from "moment";

import { styles } from "./style";

const TextHero = ({ classes,searchHero,changeValue }) => (
	<div className={cx(classes.container)}>
	    <div className={cx(classes.Field ,classes.Fieldissearch)} onChange={changeValue}>
		  <input
		    type="search"
		    name="search"
		    placeholder="Marvel y sus personajes."
		    className={cx(classes.formControl)}/>

		  <button
		    type="submit"
		    className={cx(classes.boton)}
		    onClick={searchHero}
		    >Search</button>
		</div>

  	</div>
);

export default withStyles(styles)(TextHero);
