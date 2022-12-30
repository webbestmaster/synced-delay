# Synced Delay

[![GitHub license](https://img.shields.io/npm/l/synced-delay)](https://github.com/webbestmaster/synced-delay/blob/master/license)
[![codecov](https://codecov.io/gh/webbestmaster/synced-delay/branch/master/graph/badge.svg)](https://codecov.io/gh/webbestmaster/synced-delay)
[![npm version](https://img.shields.io/npm/v/synced-delay.svg)](https://www.npmjs.com/package/synced-delay)
[![Known Vulnerabilities](https://snyk.io/test/github/webbestmaster/synced-delay/badge.svg)](https://snyk.io/test/github/webbestmaster/synced-delay)
[![Dependency count](https://badgen.net/bundlephobia/dependency-count/synced-delay)](https://libraries.io/npm/synced-delay)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/webbestmaster/synced-delay)](https://libraries.io/npm/synced-delay)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/synced-delay)](https://bundlephobia.com/package/synced-delay)
[![nodejs version](https://img.shields.io/node/v/synced-delay)](https://nodejs.org/en/docs)
[![Github CI](https://github.com/webbestmaster/synced-delay/actions/workflows/github-ci.yml/badge.svg)](https://github.com/webbestmaster/synced-delay/actions/workflows/github-ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/webbestmaster/synced-delay/github-ci.yml)](https://github.com/webbestmaster/synced-delay/actions/workflows/github-ci.yml)
[![Type definitions](https://img.shields.io/npm/types/synced-delay)](https://www.typescriptlang.org)
[![Website](https://img.shields.io/website?url=https://github.com/webbestmaster/synced-delay)](https://github.com/webbestmaster/synced-delay)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/synced-delay?style=social)](https://github.com/webbestmaster/synced-delay)


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
