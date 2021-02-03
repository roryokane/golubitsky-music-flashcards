import { noteAbove } from "./intervals.js";

describe("perfect fifths", () => {
  test.each([
    ["A", "E"],
    ["B", "F#"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "P5")).toBe(expected);
  });
});

describe("major thirds", () => {
  test.each([
    ["A", "C#"],
    ["B", "D#"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "M3")).toBe(expected);
  });
});

describe("minor thirds", () => {
  test.each([
    ["A", "C"],
    ["B", "D"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "m3")).toBe(expected);
  });
});

describe("minor sevenths", () => {
  test.each([
    ["A", "G"],
    ["B", "A"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "m7")).toBe(expected);
  });
});

describe("major sevenths", () => {
  test.each([
    ["A", "G#"],
    ["B", "A#"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "M7")).toBe(expected);
  });
});

describe("augmented fourths", () => {
  test.each([
    ["A", "D#"],
    ["Bb", "E"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "+4")).toBe(expected);
  });
});

describe("diminished fifths", () => {
  test.each([
    ["A", "Eb"],
    ["Bb", "Fb"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "o5")).toBe(expected);
  });
});