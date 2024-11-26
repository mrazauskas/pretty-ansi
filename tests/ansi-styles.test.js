import assert from "node:assert";
import test from "node:test";
import ansiStyle from "ansi-styles";
import prettyAnsi from "pretty-ansi";

test("supports style.red", () => {
  assert.strictEqual(
    prettyAnsi(`${ansiStyle.red.open} foo content ${ansiStyle.red.close}`),
    "<red> foo content </color>",
  );
});

test("supports style.green", () => {
  assert.strictEqual(
    prettyAnsi(`${ansiStyle.green.open} foo content ${ansiStyle.green.close}`),
    "<green> foo content </color>",
  );
});

test("supports style.reset", () => {
  assert.strictEqual(prettyAnsi(`${ansiStyle.reset.open} foo content ${ansiStyle.reset.close}`), "</> foo content </>");
});

test("supports style.bold", () => {
  assert.strictEqual(prettyAnsi(`${ansiStyle.bold.open} foo content`), "<bold> foo content");
});

test("supports style.dim", () => {
  assert.strictEqual(prettyAnsi(`${ansiStyle.dim.open} foo content`), "<dim> foo content");
});

test("does not support other colors", () => {
  assert.strictEqual(
    prettyAnsi(`${ansiStyle.blue.open} foo content ${ansiStyle.reset.close}`),
    "<blue> foo content </>",
  );
});
