import ansiStyle from "ansi-styles";
import { expect } from "chai";
import { describe, test } from "mocha";

import prettyAnsi from "pretty-ansi";

describe("supports ansi-styles", () => {
  test("supports style.red", async () => {
    expect(prettyAnsi(`${ansiStyle.red.open} foo content ${ansiStyle.red.close}`)).to.equal(
      "<red> foo content </color>",
    );
  });

  test("supports style.green", () => {
    expect(prettyAnsi(`${ansiStyle.green.open} foo content ${ansiStyle.green.close}`)).to.equal(
      "<green> foo content </color>",
    );
  });

  test("supports style.reset", () => {
    expect(prettyAnsi(`${ansiStyle.reset.open} foo content ${ansiStyle.reset.close}`)).to.equal("</> foo content </>");
  });

  test("supports style.bold", () => {
    expect(prettyAnsi(`${ansiStyle.bold.open} foo content`)).to.equal("<bold> foo content");
  });

  test("supports style.dim", () => {
    expect(prettyAnsi(`${ansiStyle.dim.open} foo content`)).to.equal("<dim> foo content");
  });

  test("does not support other colors", () => {
    expect(prettyAnsi(`${ansiStyle.blue.open} foo content ${ansiStyle.reset.close}`)).to.equal(
      "<blue> foo content </>",
    );
  });
});
