import { State, WhiteboardState } from "../state/state";
import { getMousePosition } from "../util/util";
import { onMove } from "./whiteboard";
import { canvas } from "../global";

export const initKeyboard = () => {
  if (!canvas) {
    throw new Error("canvas in null")
  }
  canvas.addEventListener("mousedown", (event) => {
    State.isPressing = true;
    if (State.isDrawing) {
      WhiteboardState.path.push(getMousePosition(event));
    }
  });

  canvas.addEventListener("mouseup", () => {
    State.isPressing = false;
    WhiteboardState.path = [];
  });

  canvas.addEventListener("mousemove", onMove);
};
