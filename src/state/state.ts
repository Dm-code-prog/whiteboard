import type { Point } from "../global";
import { debug } from "../domains/debug";

interface IState {
  isDrawing: boolean;
  isDeleting: boolean;
  isPressing: boolean
}

export const State = new Proxy(
  {
    isDrawing: false,
    isDeleting: false,
    isPressing: false,
  },
  {
    set(target: IState, property: keyof IState, value: IState[keyof IState]) {
      target[property] = value;
      debug();
      return true;
    },
  }
);

interface IWhiteboardState {
  path: Point[];
  paths: Point[][];
}

export const WhiteboardState: IWhiteboardState = {
  path: [],
  paths: [],
};
