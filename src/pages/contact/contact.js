import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyValue from '../../components/keyValue/keyValue';
import type { Address } from './contactReducer';
import { Paper, withStyles } from '@material-ui/core';

type Props = {
  address: Address,
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export class Contact extends Component<Props> {
  render() {
    return (
      <div>
        <Paper>
          <div>Contact information</div>
          <KeyValue description="Address" value={this.props.address.street} />
          <KeyValue
            description="Postnummer"
            value={this.props.address.areaCode}
          />
          <KeyValue description="Stad" value={this.props.address.city} />
        </Paper>
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
