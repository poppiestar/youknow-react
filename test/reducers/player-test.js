/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import player from '../../src/reducers/player';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The player reducer', () => {

    test("should create a player object", (done) => {
        const expected = {
            id: 5,
            name: "Sonny"
        };

        const actual = player(undefined, {
            type: "PLAYERS:ADD",
            id: 5,
            name: "Sonny"
        });

        expect(expected).to.equal(actual);
        done();
    });

});
