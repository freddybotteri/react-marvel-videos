import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "redux";
import { connect } from "react-redux";
import get from "lodash/get";

import { getHeroData } from "../../redux/actions/hero";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import TextHero from "./components/TextHero";
import { styles } from "./style";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      valueHeroToSearch: ''
    };

    this.handleChangeHeroToSearch = this.handleChangeHeroToSearch.bind(this);
    this.handleSearchHeroClick = this.handleSearchHeroClick.bind(this);
  }

  handleChangeHeroToSearch(event) {
    this.setState({valueHeroToSearch: event.target.value});
  };


  handleSearchHeroClick(){
    const valuetoseach = this.state.valueHeroToSearch
    this.props.getHeroData({ name: valuetoseach });
  };

  render() {
    const { classes ,herosData } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} justify="center"  className={classes.rightContainer}>
          <Grid container className={classes.root}>
            <Grid item xs={12} justify="center">
              <TextHero changeValue={this.handleChangeHeroToSearch} searchHero={this.handleSearchHeroClick} />
              <RightContainer heros={herosData}  /> 
            </Grid>      
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const actions = {
  getHeroData
};

const mapStateToProps = state => ({
  herosData: get(state, "hero.herosData", null),
});

export { Home };

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withStyles(styles)
)(Home);
