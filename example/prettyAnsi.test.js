import { expect } from "chai";
import { test } from "mocha";

import prettyAnsi from "pretty-ansi";

test("command output", () => {
  const commandOutput = "\u001b[3;32mSuccess!\u001b[0m";

  expect(prettyAnsi(commandOutput)).to.equal("<italic, green>Success!</>");
});
