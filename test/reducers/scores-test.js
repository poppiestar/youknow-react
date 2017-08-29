/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import scores from '../../src/reducers/scores';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The scores reducer', () => {

    test("should have default values", (done) => {
        const expected = {};

        const actual = scores(undefined, {});

        expect(expected).to.equal(actual);
        done();
    });

    test("should add a new player", (done) => {
        const expected = {
            1: [0]
        };
        
        const actual = scores({}, {
            type: "PLAYERS:ADD",
            id: 1,
            name: "Teela"
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should add a score to an existing player", (done) => {
        const expected = {
            1: [0, 50]
        };
        
        const actual = scores({}, {
            type: "PLAYERS:ADD_PLAYER_SCORE",
            id: 1,
            score: 50
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should remove a player", (done) => {
        const initialState = {
            1: [0],
            2: [0, 50]
        };
        
        const expected = {
            2: [0, 50]
        };

        const actual = scores(initialState, {
            type: "PLAYERS:REMOVE",
            id: 1
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should reset all the player scores when game is restarted", (done) => {
        const initialState = {
            1: [0, 100],
            2: [0, 50]
        };
        
        const expected = {
            1: [0],
            2: [0]
        };

        const actual = scores(initialState, {
            type: "GAME:RESTART"
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should remove all the player scores when game is reset", (done) => {
        const initialState = {
            1: [0, 100],
            2: [0, 50]
        };
        
        const expected = {};

        const actual = scores(initialState, {
            type: "GAME:RESET"
        });

        expect(expected).to.equal(actual);
        done();
    });
});
