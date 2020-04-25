import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Authentication from '../containers/Authentication/Authentication';
import Login from '../containers/Login/Login';

const inputs =

configure({ adapter: new Adapter() });

describe('it should contain a form', () => {
  const wrapper = shallow(<Authentication />);
  const errorMsg = '';
  const setErrorMsg = (errorMsg) => {
    console.log(errorMsg);
  }
  expect(wrapper.contains(<Login errorMsg={errorMsg} setErrorMsg={setErrorMsg}></Login>)).toEqual(true);
} )