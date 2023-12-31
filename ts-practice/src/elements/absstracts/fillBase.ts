import { FillShapeParams, ShapeParams } from "../../utils/interfaces";
import { stylingParams } from "../../utils/types";
import { ShapeBase } from "./shapeBase";

export abstract class FillShabeBase extends ShapeBase {
  constructor(params: FillShapeParams) {
    super(params);
    this._fillStyle = params.fillStyle || "black";
  }

  protected _fillStyle: stylingParams;

  public get fillStyle() {
    return this._fillStyle
  }

  public set fillStyle(style: stylingParams) {
    this._fillStyle = style
  }

  
  public draw(ctx: CanvasRenderingContext2D) {
    this.makePath()
    ctx.save();
    ctx.fillStyle = this._fillStyle;
    ctx.strokeStyle = this._strokeStyle;
    ctx.fill(this._path);
    ctx.stroke(this._path);
    ctx.restore();
  }

  public drawTry(ctx: CanvasRenderingContext2D) {
    this.makePath()
    ctx.save();
    ctx.fillStyle = '';
    ctx.strokeStyle = 'blue';
    ctx.stroke(this._path);
    ctx.restore();
  }
}