/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import players from '../../src/reducers/players';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('The players reducer', () => {

    test("should default to empty values", (done) => {
        const expected = {
            "allIds": [],
            "byId": {}
        };

        const actual = players(undefined, {});

        expect(expected).to.equal(actual);
        done();
    });

    suite("when adding a player", () => {
        test("should add a new player to the empty state", (done) => {
            const expected = {
                "allIds": [1],
                "byId": {
                    1: {
                        id: 1,
                        name: "He-Man"
                    }
                }
            };
        
            const actual = players(undefined, {
                type: "PLAYERS:ADD",
                id: 1,
                name: "He-Man"
            });
        
            expect(expected).to.equal(actual);
            done();
        });

        test("should add a new player to an existing state", (done) => {
            const initialState = {
                "allIds": [1],
                "byId": {
                    1: {
                        id: 1,
                        name: "He-Man"
                    }
                }
            };

            const expected = {
                "allIds": [1, 2],
                "byId": {
                    1: {
                        id: 1,
                        name: "He-Man"
                    },
                    2: {
                        id: 2,
                        name: "She-Ra"
                    }
                }
            };

            const actual = players(initialState, {
                type: "PLAYERS:ADD",
                id: 2,
                name: "She-Ra"
            });
        
            expect(expected).to.equal(actual);
            done();
        });
    });

    suite("when removing a player", () => {
        test("should remove the player from the state", (done) => {
            const initialState = {
                "allIds": [1, 2],
                "byId": {
                    1: {
                        id: 1,
                        name: "He-Man"
                    },
                    2: {
                        id: 2,
                        name: "She-Ra"
                    }
                }
            };

            const expected = {
                "allIds": [1],
                "byId": {
                    1: {
                        id: 1,
                        name: "He-Man"
                    }
                }
            };

            const actual = players(initialState, {
                type: "PLAYERS:REMOVE",
                id: 2
            });
        
            expect(expected).to.equal(actual);
            done();
        });

        test("should stay the same when an id doesn't exist", (done) => {
            const initialState = {
                "allIds": [1, 2],
                "byId": {
                    1: {
                        id: 1,
                        name: "He-Man"
                    },
                    2: {
                        id: 2,
                        name: "She-Ra"
                    }
                }
            };

            const actual = players(initialState, {
                type: "PLAYERS:REMOVE",
                id: 3
            });
        
            expect(initialState).to.equal(actual);
            done();
        });
    });

    test("resetting the state", (done) => {
        const initialState = {
            "allIds": [1, 2],
            "byId": {
                1: {
                    id: 1,
                    name: "He-Man"
                },
                2: {
                    id: 2,
                    name: "She-Ra"
                }
            }
        };

        const expected = {
            "allIds": [],
            "byId": {}
        };

        const actual = players(initialState, {
            type: "GAME:RESET"
        });
    
        expect(expected).to.equal(actual);
        done();
    });
});
