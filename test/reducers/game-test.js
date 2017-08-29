/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import game from '../../src/reducers/game';
import Stage from '../../src/constants/stages';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The game reducer', () => {

    test("should default to the splash page", (done) => {
        const expected = {
            "stage": Stage.SPLASH
        };

        const actual = game(undefined, {});

        expect(expected).to.equal(actual);
        done();
    });

    test("should set the stage to the one specified", (done) => {
        const expected = {
            "stage": Stage.WINNER
        };

        const actual = game(undefined, {
            type: "GAME:SET_STAGE",
            stage: Stage.WINNER
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should return to the game round when the game is restarted", (done) => {
        const expected = {
            "stage": Stage.GAME_ROUND
        };

        const actual = game(undefined, {
            type: "GAME:RESTART"
        });

        expect(expected).to.equal(actual);
        done();
    });

    test("should return to the game set when the game is reset", (done) => {
        const expected = {
            "stage": Stage.GAME_SETUP
        };

        const actual = game(undefined, {
            type: "GAME:RESET"
        });

        expect(expected).to.equal(actual);
        done();
    });
});
