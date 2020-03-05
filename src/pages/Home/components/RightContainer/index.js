import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";
import Grid from "@material-ui/core/Grid";
import HeroDescription from "../HeroDescription";

class RightContainer extends Component {
  renderHeros() {
    const { heros } = this.props;
    if (!isEmpty(heros)) {
      return heros.map(hero => <Grid item xs={4} justify="center"><HeroDescription key={hero.name} {...hero} /></Grid> )
    }
  }
  render() {
    return(
        <Grid container>
          {this.renderHeros()}
        </Grid>
        
    );
  }
}

export default RightContainer;
