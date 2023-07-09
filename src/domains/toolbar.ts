import { State } from "../state/state";

export const initToolbar = () => {
  const pencil = document.querySelector("#pencil");
  const eraser = document.querySelector("#eraser");

  if (!pencil) {
    throw new Error("tool.pencil is null");
  }

  if (!eraser) {
    throw new Error("tool.eraser is null");
  }

  State.isDrawing = true;
  State.isDeleting = false;
  pencil.setAttribute("style", "background: rgb(56,56,56);");
  eraser.setAttribute("style", "background: none;");

  pencil.addEventListener("click", () => {
    State.isDrawing = true;
    State.isDeleting = false;
    pencil.setAttribute("style", "background: rgb(56,56,56);");
    eraser.setAttribute("style", "background: none;");
  });

  eraser.addEventListener("click", () => {
    State.isDeleting = true;
    State.isDrawing = false;
    eraser.setAttribute("style", "background: rgb(56,56,56);");
    pencil.setAttribute("style", "background: none;");
  });
};
