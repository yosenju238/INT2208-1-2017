// import Home from './Home';
import React from "react";
const Home = require('./Home');


describe("Using sound in home page", () => {
  //Ran is being in home page
  const rain = ".src"
  it("Ran click on Rain button",  () => {
    const rain = home().find("Rain");
    expect(rain).toHaveBeenCalled;

  });
});
