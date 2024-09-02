# @pg-nano/pg-schema-diff

A cross-platform distribution of the `pg-schema-diff` binary, tailored for use with [pg-nano](https://github.com/pg-nano/pg-nano).

## Installation

```bash
pnpm add @pg-nano/pg-schema-diff
```

## Usage

```bash
pnpm pg-schema-diff --help
```

You also have the option of spawning a child process to run the command:

```js
import spawn from "tinyspawn";

await spawn("./node_modules/.bin/pg-schema-diff --help", {
	stdio: "inherit",
});
```

## Thanks

This package wouldn't exist without these tools:

- [stripe/pg-schema-diff](https://github.com/stripe/pg-schema-diff)
- [goreleaser](https://github.com/goreleaser/goreleaser)
- [prantlf/grab-github-release](https://github.com/prantlf/grab-github-release)
