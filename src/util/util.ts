import { canvas } from "../global";

import type {Point} from "../global"

/**
 * 
 * @param event 
 * returns current (X, Y) position of the Mouse
 */
export const getMousePosition = (event: MouseEvent): Point => {
    const rect = canvas?.getBoundingClientRect();
    if (!rect) {
      console.log("can't get canvas rect");
      return {
        x: 0,
        y: 0,
      };
    }
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    return {
      x,
      y,
    };
  };