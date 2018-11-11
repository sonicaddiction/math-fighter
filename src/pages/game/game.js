import { Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterSheet from '../../components/characterSheet/characterSheet';
import Hud from './components/hud/hud';
import { initBattle } from './actionCreators';
import BattleMessages from './components/battleMessages/battleMessages';

type Props = {};

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

class Game extends Component<Props> {
  componentDidMount() {
    this.props.initBattle();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <CharacterSheet character={this.props.battle.player} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CharacterSheet character={this.props.battle.enemy} />
          </Grid>
          <Grid item xs={12}>
            <Hud />
          </Grid>
          <Grid item xs={12}>
            <BattleMessages />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  battle: state.battle,
});

const mapDispatchToProps = dispatch => {
  return {
    initBattle: () => {
      dispatch(initBattle());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Game));
