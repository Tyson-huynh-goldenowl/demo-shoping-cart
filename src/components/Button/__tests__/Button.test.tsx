import React from 'react';
import { shallow } from 'enzyme'
import Button from "../Button";
import '../button.css';

describe('Button component', () => {
  it('renders correctly', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();

  });
  // it('should be selectable by class "foo"', function () {
  //   expect(shallow(<Button>Text</Button>).contains(<button>Text</button>)).toBe(true);
  // });
  // expect(shallow(<Button />).is('.storybook-button')).toBe(true);

})
