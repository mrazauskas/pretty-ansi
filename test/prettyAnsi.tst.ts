import prettyAnsi from "pretty-ansi";
import { expect, test } from "tstyche";

test("prettyAnsi", () => {
  expect(prettyAnsi("abc")).type.toBeString();
});
