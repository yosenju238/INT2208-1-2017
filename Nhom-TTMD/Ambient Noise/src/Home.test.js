// import Home from './Home';
import React from "react";
import { shallow } from 'enzyme';
jest.unmock('../Foo');
const Home = require('./Home');
    
  //Ran is being in home page
  const home = shallow(<Home />)
      beforeEach(function () {
        home.stopNoise();
    });  

  it("Ran click on Rain button",  () => {
        expect(Home.Rain()).toBe(true);
  });
