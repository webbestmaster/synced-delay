import assert from 'node:assert/strict';

import {describe, test} from '@jest/globals';

import {syncedDelay} from './synced-delay';
import {SyncedDelayResultType} from './synced-delay-type';

describe('Synced Delay', () => {
    test('Main call, check accuracy', () => {
        const delayTime = 3e3;
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(delayTime);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        assert.equal(Math.abs(syncedDelayResult.deltaTime - deltaTime) < 100, true);
        assert.equal(Math.abs(delayTime - deltaTime) < 100, true);
    });

    test('Zero call', () => {
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(0);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        assert.equal(Math.abs(syncedDelayResult.deltaTime - deltaTime) < 10, true);
        assert.equal(deltaTime < 10, true);
        assert.equal(syncedDelayResult.iterationCount === 0, true);
    });

    test('NaN call, check accuracy', () => {
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(Number.NaN);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        assert.equal(Math.abs(syncedDelayResult.deltaTime - deltaTime) < 10, true);
        assert.equal(deltaTime < 10, true);
        assert.equal(syncedDelayResult.iterationCount === 0, true);
    });
});
