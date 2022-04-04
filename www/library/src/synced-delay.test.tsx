/* global describe, it, expect */
import {syncedDelay} from './synced-delay';
import {SyncedDelayResultType} from './synced-delay-type';

describe('Synced Delay', () => {
    it('Main call, check accuracy', () => {
        const delayTime = 3e3;
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(delayTime);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        expect(Math.abs(syncedDelayResult.deltaTime - deltaTime) < 100).toBeTruthy();
        expect(Math.abs(delayTime - deltaTime) < 100).toBeTruthy();
    });

    it('Zero call', () => {
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(0);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        expect(Math.abs(syncedDelayResult.deltaTime - deltaTime) < 10).toBeTruthy();
        expect(deltaTime < 10).toBeTruthy();
        expect(syncedDelayResult.iterationCount === 0).toBeTruthy();
    });

    it('NaN call, check accuracy', () => {
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(Number.NaN);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        expect(Math.abs(syncedDelayResult.deltaTime - deltaTime) < 10).toBeTruthy();
        expect(deltaTime < 10).toBeTruthy();
        expect(syncedDelayResult.iterationCount === 0).toBeTruthy();
    });
});
