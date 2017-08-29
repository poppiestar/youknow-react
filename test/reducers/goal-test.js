/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import goal from '../../src/reducers/goal';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The goal reducer', () => {

    test("should set a default goal", (done) => {
        const expected = 300;

        const actual = goal(undefined, {});

        expect(expected).to.equal(actual);
        done();
    });

    test("should set the goal value", (done) => {
        const expected = 500;

        const actual = goal(300, {
            type: "GOAL:SET",
            goal: 500
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should return the default goal when the game is reset", (done) => {
        const expected = 300;

        const actual = goal(999, {
            type: "GAME:RESET"
        });

        expect(expected).to.equal(actual);
        done();
    });
});
