// import Home from './Home';
const Home = require('./Home');


describe("Using sound in home page", () => {
  //Ran is being in home page
  beforeEach(function() {
    Home.play();
  });
  it("Ran click on Rain button",  () => {
    
    expect(Home.play()).toHaveBeenCalled;

  });
});
