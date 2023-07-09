// GLOBAL

const canvas = document.getElementById("c") as HTMLCanvasElement | null;

const ctx = canvas?.getContext("2d");

if (ctx) {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
}

export type Point = {
  x: number;
  y: number;
};

export { canvas, ctx };
