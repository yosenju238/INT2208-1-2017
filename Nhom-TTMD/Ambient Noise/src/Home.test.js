import React from "react";
import { shallow,shallowRender } from 'enzyme';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import Home from './Home';

    
  describe('Ran is being in home page', () => {

    var home = shallow(<Home/>)
    var rain = <source src={require("./audio/rain.mp3")} />
    it("Ran click on Rain button",  () => {
      
      expect(home.find('audio').find('source').get(0)).toEqual(rain);
      // home.find('button').simulate('click');
      home.instance().Rain();
      expect(true).toBe(true);
    });
  });
