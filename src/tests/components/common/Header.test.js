import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../components/common/Header';

let wrapper = null;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

test('should render <Header /> correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should be type type of header', () => {
  expect(wrapper.type()).toBe('header');
});

test('should render ul', () => {
  expect(wrapper.find('ul')).toHaveLength(1);
});