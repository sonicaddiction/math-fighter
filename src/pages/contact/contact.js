import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyValue from '../../components/keyValue/keyValue';
import type { Address } from './contactReducer';

type Props = {
  address: Address;
};

export class Contact extends Component<Props> {
  render() {
    return (
      <div>
        <div>Contact information</div>
        <KeyValue description="Address" value={this.props.address.street} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    address: state.contact.address,
});

export const ContactContainer = connect(
  mapStateToProps
)(Contact);
