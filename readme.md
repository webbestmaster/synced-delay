# Synced Delay

[![GitHub license](https://img.shields.io/npm/l/synced-delay)](https://github.com/webbestmaster/synced-delay/blob/master/license)
[![npm version](https://img.shields.io/npm/v/synced-delay.svg?style=flat)](https://www.npmjs.com/package/synced-delay)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/synced-delay)
<!-- [![GitHub stars](https://img.shields.io/github/stars/webbestmaster/synced-delay?style=social&maxAge=2592000)](https://github.com/webbestmaster/synced-delay/) -->

Bad method to "pause" process.

## Install

```bash
npm i synced-delay
```

## Usage
```typescript jsx
import {syncedDelay, SyncedDelayResultType} from 'synced-delay';

console.log(new Date()); // current date/time

syncedDelay(3000); // "pause" process for 3 seconds

console.log(new Date());  // current date/time, but plus 3 seconds
```
