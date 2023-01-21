import React from 'react';
import { shallow, render, mount } from 'enzyme';
import List from './List';

describe('List', () => {
  let props;
  let shallowList;
  let renderedList;
  let mountedList;

  const shallowTestComponent = () => {
    if (!shallowList) {
      shallowList = shallow(<List {...props} />);
    }
    return shallowList;
  };

  const renderTestComponent = () => {
    if (!renderedList) {
      renderedList = render(<List {...props} />);
    }
    return renderedList;
  };

  const mountTestComponent = () => {
    if (!mountedList) {
      mountedList = mount(<List {...props} />);
    }
    return mountedList;
  };  

  beforeEach(() => {
    props = {};
    shallowList = undefined;
    renderedList = undefined;
    mountedList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
