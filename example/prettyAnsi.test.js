import assert from "node:assert";
import test from "node:test";
import prettyAnsi from "pretty-ansi";

test("command output", () => {
  const commandOutput = "\u001b[3;32mSuccess!\u001b[0m";

  assert.strictEqual(prettyAnsi(commandOutput), "<italic, green>Success!</>");
});
