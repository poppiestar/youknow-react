
import Lab from 'lab';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'code';
import { shallow, mount, render } from 'enzyme';

import ScoreInput from '../src/EnterScore/ScoreInput';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The ScoreInput component', () => {
    test("increment button should call the increment prop function when clicked", (done) => {
        const incrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput increment={incrementSpy} />);

        wrapper.find('.increment').simulate('click');
        expect(incrementSpy.callCount).to.equal(1);
        done();
    });

    test("decrement button should not call the decrement prop function when clicked if the state is 0", (done) => {
        const decrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput decrement={decrementSpy} />);

        wrapper.find('.decrement').simulate('click');
        expect(decrementSpy.callCount).to.equal(0);
        done();
    });

});
