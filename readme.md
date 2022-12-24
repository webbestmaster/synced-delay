# Synced Delay

[![GitHub license](https://img.shields.io/npm/l/synced-delay)](https://github.com/webbestmaster/synced-delay/blob/master/license)
[![codecov](https://codecov.io/gh/webbestmaster/synced-delay/branch/master/graph/badge.svg?token=X5SNICUPUQ)](https://codecov.io/gh/webbestmaster/synced-delay)
[![npm version](https://img.shields.io/npm/v/synced-delay.svg?style=flat)](https://www.npmjs.com/package/synced-delay)
![Known Vulnerabilities](https://snyk.io/test/github/webbestmaster/synced-delay/badge.svg)
[![Github CI](https://github.com/webbestmaster/synced-delay/actions/workflows/github-ci.yml/badge.svg)](https://github.com/webbestmaster/synced-delay/actions/workflows/github-ci.yml)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/webbestmaster/synced-delay/github-ci.yml)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/synced-delay)
![node-current](https://img.shields.io/node/v/synced-delay)
![npm type definitions](https://img.shields.io/npm/types/synced-delay)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/synced-delay?style=social)](https://github.com/webbestmaster/synced-delay/)
<!-- ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/webbestmaster/synced-delay) -->

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

## License

See [license](license).
