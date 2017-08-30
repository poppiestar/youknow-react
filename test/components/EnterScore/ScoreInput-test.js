/* eslint-env node */

import Lab from 'lab';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'code';
import { shallow } from 'enzyme';

import ScoreInput from '../../../src/EnterScore/ScoreInput';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The ScoreInput component', () => {

    test("should display an initial count of 0", (done) => {
        const wrapper = shallow(<ScoreInput />);

        expect(wrapper.find('.count').text()).to.equal('0');
        done();
    });

    test("increment button should increment the count", (done) => {
        const incrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput increment={incrementSpy} />);

        wrapper.find('.increment').simulate('click');

        expect(wrapper.find('.count').text()).to.equal('1');
        done();
    });

    test("increment button should call the increment prop function when clicked", (done) => {
        const incrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput increment={incrementSpy} />);

        wrapper.find('.increment').simulate('click');

        expect(incrementSpy.callCount).to.equal(1);
        done();
    });

    test("decrement button should decrement the count", (done) => {
        const decrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput decrement={decrementSpy} />);

        wrapper.setState({ count: 4 });
        wrapper.find('.decrement').simulate('click');

        expect(wrapper.find('.count').text()).to.equal('3');
        expect(wrapper.state('count')).to.equal(3);
        done();
    });

    test("decrement button should not decrement the count if it is already 0", (done) => {
        const decrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput decrement={decrementSpy} />);

        wrapper.find('.decrement').simulate('click');

        expect(wrapper.find('.count').text()).to.equal('0');
        expect(wrapper.state('count')).to.equal(0);
        done();
    });

    test("decrement button should call the decrement prop function when clicked if the state is > 0", (done) => {
        const decrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput decrement={decrementSpy} />);

        wrapper.setState({ count: 4 });
        wrapper.find('.decrement').simulate('click');

        expect(decrementSpy.callCount).to.equal(1);
        expect(wrapper.state('count')).to.equal(3);
        done();
    });

    test("decrement button should not call the decrement prop function when clicked if the state is 0", (done) => {
        const decrementSpy = sinon.spy();
        const wrapper = shallow(<ScoreInput decrement={decrementSpy} />);

        wrapper.find('.decrement').simulate('click');

        expect(wrapper.state('count')).to.equal(0);
        expect(decrementSpy.callCount).to.equal(0);
        done();
    });

});
