/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import score from '../../src/reducers/score';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The score reducer', () => {

    suite("when creating a new player", () => {

        test("should create a default score list", (done) => {
            const expected = [0];

            const actual = score(undefined, {
                type: "PLAYERS:ADD",
                id: 5,
                name: "Sonny"
            });

            expect(expected).to.equal(actual);
            done();
        });
    });

    suite("when restarting a game", () => {

        test("should create a default score list", (done) => {
            const expected = [0];

            const actual = score(undefined, {
                type: "GAME:RESTART"
            });

            expect(expected).to.equal(actual);
            done();
        });
    });

    test("should add a score to a score list", (done) => {
        const expected = [0, 10];

        const actual = score([0], {
            type: "PLAYERS:ADD_PLAYER_SCORE",
            score: 10
        });

        expect(expected).to.equal(actual);
        done();
    });
});
