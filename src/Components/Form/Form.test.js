import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let props;
  let shallowForm;
  let renderedForm;
  let mountedForm;

  const shallowTestComponent = () => {
    if (!shallowForm) {
      shallowForm = shallow(<Form {...props} />);
    }
    return shallowForm;
  };

  const renderTestComponent = () => {
    if (!renderedForm) {
      renderedForm = render(<Form {...props} />);
    }
    return renderedForm;
  };

  const mountTestComponent = () => {
    if (!mountedForm) {
      mountedForm = mount(<Form {...props} />);
    }
    return mountedForm;
  };  

  beforeEach(() => {
    props = {};
    shallowForm = undefined;
    renderedForm = undefined;
    mountedForm = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
