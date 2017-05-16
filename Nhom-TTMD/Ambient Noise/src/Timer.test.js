import React from "react";
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Ran is being in timer page in beta version',() => {

    var timer = shallow(<Timer/>);

    it("Ran see 4 button to change router", () => {
        expect(timer.find('button').children().length).toBe(4);
    });

});