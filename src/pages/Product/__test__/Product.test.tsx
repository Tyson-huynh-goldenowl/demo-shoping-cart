import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Enzyme, { shallow } from 'enzyme';


import Products from '../Products';

describe('<Product />', () => {
    it('renders  components', () => {
      const wrapper = shallow(<Products />);
      jest.spyOn(React, 'useEffect').mockImplementation(f => f());
      expect(shallow).toMatchSnapshot();
    });
  
  });