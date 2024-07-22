import { assert, test } from "poku";
import prettyAnsi from "pretty-ansi";

test("command output", () => {
  const commandOutput = "\u001b[3;32mSuccess!\u001b[0m";

  assert.strictEqual(prettyAnsi(commandOutput), "<italic, green>Success!</>");
});
