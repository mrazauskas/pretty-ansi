import { expect, test } from "tstyche";

import prettyAnsi from "../";

test("prettyAnsi", () => {
  expect(prettyAnsi("abc")).type.toBeString();
});
