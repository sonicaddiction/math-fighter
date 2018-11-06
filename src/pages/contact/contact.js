import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyValue from '../../components/keyValue/keyValue';
import type { Address } from './contactReducer';
import { Paper, withStyles, Grid } from '@material-ui/core';

type Props = {
  address: Address,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});
export class Contact extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>Contact information</div>
              <KeyValue
                description="Address"
                value={this.props.address.street}
              />
              <KeyValue
                description="Postnummer"
                value={this.props.address.areaCode}
              />
              <KeyValue description="Stad" value={this.props.address.city} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>Blank paper</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.contact.address,
});

export const ContactContainer = connect(mapStateToProps)(
  withStyles(styles)(Contact)
);
