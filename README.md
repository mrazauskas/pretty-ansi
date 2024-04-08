# pretty-ansi

[![version][version-badge]][version-url]
[![license][license-badge]][license-url]
[![packagephobia][packagephobia-badge]][packagephobia-url]
[![coverage][coverage-badge]][coverage-url]

Convert ANSI escape sequences to human readable text.

---

This utility converts [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) to human readable text. It supports color, style and cursor control escapes and works with vanilla sequences as well as the output from libraries like `chalk`, `colors`, `ansi-escapes`, `ansi-styles` or `terminal-kit`.

## Install

```bash
npm add -D pretty-ansi
```

## Usage

For example, it can be useful to test the output of a command line tool:

```js
import assert from "node:assert/strict";
import { test } from "node:test";

import prettyAnsi from "pretty-ansi";

test("command output", () => {
  const commandOutput = "\u001b[3;32mSuccess!\u001b[0m";

  assert.strictEqual(prettyAnsi(commandOutput), "<italic, green>Success!</>");
});
```

## Notes

Currently only 16 colors are all supported.

Keep in mind that the escape sequences are not validated. Unrecognized sequence will print as `<ESC>[a1b2c3`, or as `<?>` in case this is a color or style sequence.

## Related

[`jest-serializer-ansi-escapes`](https://github.com/mrazauskas/jest-serializer-ansi-escapes) — Jest snapshot serializer for ANSI escape sequences.

## License

[MIT][license-url]

[version-badge]: https://badgen.net/npm/v/pretty-ansi
[version-url]: https://npmjs.com/package/pretty-ansi
[license-badge]: https://badgen.net/github/license/mrazauskas/pretty-ansi
[license-url]: https://github.com/mrazauskas/pretty-ansi/blob/main/LICENSE.md
[packagephobia-badge]: https://badgen.net/packagephobia/install/pretty-ansi
[packagephobia-url]: https://packagephobia.com/result?p=pretty-ansi
[coverage-badge]: https://badgen.net/codacy/coverage/3a26cda9352643b589953c686f921c40
[coverage-url]: https://app.codacy.com/gh/mrazauskas/pretty-ansi/coverage/dashboard
