import {describe, it, expect} from "@jest/globals";

import {syncedDelay} from "./synced-delay";
import {SyncedDelayResultType} from "./synced-delay-type";

describe("synced delay", () => {
    it("main call, check accuracy", () => {
        expect.assertions(2);
        const delayTime = 3e3;
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(delayTime);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        expect(Math.abs(syncedDelayResult.deltaTime - deltaTime)).toBeLessThan(100);
        expect(Math.abs(delayTime - deltaTime)).toBeLessThan(100);
    });

    it("zero call", () => {
        expect.assertions(3);
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(0);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        expect(Math.abs(syncedDelayResult.deltaTime - deltaTime)).toBeLessThan(10);
        expect(deltaTime).toBeLessThan(10);
        expect(syncedDelayResult.iterationCount).toBe(0);
    });

    it("the NaN call, check accuracy", () => {
        expect.assertions(3);
        const testBeginTimeStamp = Date.now();
        const syncedDelayResult: SyncedDelayResultType = syncedDelay(Number.NaN);
        const testEndTimeStamp = Date.now();
        const deltaTime = testEndTimeStamp - testBeginTimeStamp;

        expect(Math.abs(syncedDelayResult.deltaTime - deltaTime)).toBeLessThan(10);
        expect(deltaTime).toBeLessThan(10);
        expect(syncedDelayResult.iterationCount).toBe(0);
    });
});
