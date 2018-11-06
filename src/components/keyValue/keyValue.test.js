import React from 'react';
import { shallow } from 'enzyme';
import KeyValue from './keyValue';
import '../../setupTests';

describe('KeyValue', () => {
  it('Renders description and value', () => {
    const welcome = shallow(
      <KeyValue description="Description 1" value="Value 1" />
    );

    expect(welcome.find('span.description').text()).toEqual('Description 1: ');
    expect(welcome.find('span.value').text()).toEqual('Value 1');
  });
});
