import { noteAbove } from "../../foundation/intervals.js";
import {
  WHITE_KEYS,
  SHARPS,
  FLATS,
  MINOR_SEVEN,
  SEVEN,
  MAJOR_SEVEN,
} from "../../foundation/constants.js";

function backSide(note, intervals) {
  return [
    [
      noteAbove({ note: note, interval: intervals[0] }),
      noteAbove({
        note: note,
        interval: intervals[1],
      }),
    ].join(" "),
  ];
}
function thirdsAndSevenths(intervals) {
  return WHITE_KEYS.concat(SHARPS)
    .concat(FLATS)
    .map(function (note) {
      return {
        front: [note],
        back: backSide(note, intervals),
      };
    });
}

function cards(typeOfChord) {
  const intervals = {
    [MAJOR_SEVEN]: ["M3", "M7"],
    [SEVEN]: ["M3", "m7"],
    [MINOR_SEVEN]: ["m3", "m7"],
  }[typeOfChord];

  if (intervals) {
    return thirdsAndSevenths(intervals);
  }

  throw new Error(`not implemented for typeOfChord=${typeOfChord}`);
}
export { cards };
