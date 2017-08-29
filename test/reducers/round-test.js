/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import round from '../../src/reducers/round';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The players reducer', () => {

    test("should have default values", (done) => {
        const expected = {
            "score": 0,
            "winner": -1
        };

        const actual = round(undefined, {});

        expect(expected).to.equal(actual);
        done();
    });

    test("should set a winner", (done) => {
        const expected = {
            "score": 0,
            "winner": 2
        };

        const actual = round(undefined, {
            type: "ROUND:SET_WINNER",
            id: 2
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should add to the score", (done) => {
        const initialState = {
            "score": 0,
            "winner": 2
        };

        const expected = {
            "score": 50,
            "winner": 2
        };

        const actual = round(initialState, {
            type: "ROUND:ADD_SCORE",
            value: 50
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should subtract from the score", (done) => {
        const initialState = {
            "score": 100,
            "winner": 2
        };

        const expected = {
            "score": 50,
            "winner": 2
        };

        const actual = round(initialState, {
            type: "ROUND:SUBTRACT_SCORE",
            value: 50
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should reset the state when resetting the game", (done) => {
        const initialState = {
            "score": 100,
            "winner": 2
        };

        const expected = {
            "score": 0,
            "winner": -1
        };

        const actual = round(initialState, {
            type: "GAME:RESET"
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should reset the state when restarting the game", (done) => {
        const initialState = {
            "score": 100,
            "winner": 2
        };

        const expected = {
            "score": 0,
            "winner": -1
        };

        const actual = round(initialState, {
            type: "GAME:RESTART"
        });

        expect(expected).to.equal(actual);
        done();
    });
});
