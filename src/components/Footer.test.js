import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
configure({adapter: new Adapter()});
test("Should render Footer correctly..", () => {
  const wrapper = shallow(<Footer />);
  const span=wrapper.find('span');
  const result=span.text();
  expect(result).toBe('A fairly simple application to illustrate the collaboration of technology');
});