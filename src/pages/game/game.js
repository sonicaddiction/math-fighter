import { Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterSheet from '../../components/characterSheet/characterSheet';
import Hud from './components/hud/hud';

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
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  battle: state.battle,
});

export default connect(mapStateToProps)(withStyles(styles)(Game));
