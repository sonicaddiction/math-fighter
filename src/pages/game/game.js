import React, { Component } from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';

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
          <Grid item xs={6}>
            <Paper className={classes.paper}>Game page</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Game);
