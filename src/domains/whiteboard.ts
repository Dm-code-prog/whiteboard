import { ctx } from "../global";
import { getMousePosition } from "../util/util";
import { State, WhiteboardState } from "../state/state";

export const onMove = (event: MouseEvent): void => {
    if (!ctx) return
    if (!State.isPressing) return

    const point = getMousePosition(event);
    const { x, y } = point;

    if (State.isDrawing) {
      const pathLength = WhiteboardState.path.length;
      if (pathLength < 1) {
        return;
      }

      const { x: preX, y: preY } = WhiteboardState.path[pathLength - 1];

      WhiteboardState.path.push(point);

      ctx.beginPath();
      ctx.moveTo(preX, preY);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }

    if (State.isDeleting) {
      ctx.clearRect(x - 30, y - 30, 60, 60);
    }
  };