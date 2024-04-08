import ansiEscapes from "ansi-escapes";
import { expect } from "chai";
import { describe, test } from "mocha";

import prettyAnsi from "pretty-ansi";

describe("supports ansi-escapes", () => {
  const cases = [
    { expected: "<clearTerminal>\n", key: "clearTerminal" },
    { expected: "<moveCursorDownBy1RowToColumn1>\n", key: "cursorNextLine" },
    { expected: "<moveCursorUpBy1RowToColumn1>\n", key: "cursorPrevLine" },
    { expected: "<moveCursorToColumn1>\n", key: "cursorLeft" },
    { expected: "<getCursorPosition>\n", key: "cursorGetPosition" },
    { expected: "<saveCursorPosition>\n", key: "cursorSavePosition" },
    { expected: "<restoreCursorPosition>\n", key: "cursorRestorePosition" },
    { expected: "<showCursor>\n", key: "cursorShow" },
    { expected: "<hideCursor>\n", key: "cursorHide" },
    { expected: "<eraseScreenDown>\n", key: "eraseDown" },
    { expected: "<eraseScreenUp>\n", key: "eraseUp" },
    { expected: "<eraseScreen>\n", key: "eraseScreen" },
    { expected: "<eraseLineEnd>\n", key: "eraseEndLine" },
    { expected: "<eraseLineStart>\n", key: "eraseStartLine" },
    { expected: "<eraseLine>\n", key: "eraseLine" },
    { expected: "<scrollUpBy1Row>\n", key: "scrollUp" },
    { expected: "<scrollDownBy1Row>\n", key: "scrollDown" },
  ];

  cases.forEach(({ key, expected }) => {
    test(key, () => {
      expect(prettyAnsi(`${ansiEscapes[key]}`)).to.equal(expected);
    });
  });

  const casesWithKey = [
    { expected: "<moveCursorUpBy1Row>\n", key: "cursorUp" },
    { arg: 9, expected: "<moveCursorUpBy9Rows>\n", key: "cursorUp" },
    { expected: "<moveCursorDownBy1Row>\n", key: "cursorDown" },
    { arg: 15, expected: "<moveCursorDownBy15Rows>\n", key: "cursorDown" },
    { expected: "<moveCursorRightBy1Column>\n", key: "cursorForward" },
    { arg: 4, expected: "<moveCursorRightBy4Columns>\n", key: "cursorForward" },
    { expected: "<moveCursorLeftBy1Column>\n", key: "cursorBackward" },
    { arg: 7, expected: "<moveCursorLeftBy7Columns>\n", key: "cursorBackward" },
  ];

  casesWithKey.forEach(({ arg, key, expected }) => {
    test(`${key}(${arg})`, () => {
      expect(prettyAnsi(ansiEscapes[key](arg))).to.equal(expected);
    });
  });

  test("cursorTo(14)", () => {
    expect(prettyAnsi(ansiEscapes.cursorTo(14))).to.equal("<moveCursorToColumn15>\n");
  });

  test("cursorTo(6, 18)", () => {
    expect(prettyAnsi(ansiEscapes.cursorTo(6, 18))).to.equal("<moveCursorToRow19Column7>\n");
  });

  test("cursorMove(5)", () => {
    expect(prettyAnsi(ansiEscapes.cursorMove(5))).to.equal("<moveCursorRightBy5Columns>\n");
  });

  test("cursorMove(-2)", () => {
    expect(prettyAnsi(ansiEscapes.cursorMove(-2))).to.equal("<moveCursorLeftBy2Columns>\n");
  });

  test("cursorMove(12, 3)", () => {
    expect(prettyAnsi(ansiEscapes.cursorMove(12, 3))).to.equal(
      "<moveCursorRightBy12Columns>\n<moveCursorDownBy3Rows>\n",
    );
  });

  test("cursorMove(10, -8)", () => {
    expect(prettyAnsi(ansiEscapes.cursorMove(10, -8))).to.equal(
      "<moveCursorRightBy10Columns>\n<moveCursorUpBy8Rows>\n",
    );
  });

  test("cursorMove(-5, 18)", () => {
    expect(prettyAnsi(ansiEscapes.cursorMove(-5, 18))).to.equal(
      "<moveCursorLeftBy5Columns>\n<moveCursorDownBy18Rows>\n",
    );
  });

  test("cursorMove(-17, -2)", () => {
    expect(prettyAnsi(ansiEscapes.cursorMove(-21, -9))).to.equal(
      "<moveCursorLeftBy21Columns>\n<moveCursorUpBy9Rows>\n",
    );
  });
});
