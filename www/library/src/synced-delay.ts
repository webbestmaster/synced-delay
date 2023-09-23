import type {SyncedDelayResultType} from "./synced-delay-type";

export function syncedDelay(timeMs: number): SyncedDelayResultType {
    const startTime = Date.now();
    let iterationCount = 0;
    let endTime = startTime;

    // eslint-disable-next-line no-loops/no-loops
    while (startTime + timeMs > endTime) {
        // Heavy operation
        Array.from({length: 1e5}).forEach(() => {
            return Date.now() ** Math.random();
        });

        iterationCount += 1;
        endTime = Date.now();
    }

    const deltaTime = endTime - startTime;
    const iterationsPerSecond = (iterationCount / deltaTime) * 1e3;

    return {
        deltaTime,
        endTime,
        iterationCount,
        iterationsPerSecond,
        startTime,
    };
}
