import { Injectable } from '@angular/core';
import { ElementFactory } from '../utilities/element-factory';
import { SelectOptions } from '../utilities/elements';
import { ElementBase } from '../utilities/elements/absstracts';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  private _ctx!: CanvasRenderingContext2D;
  private _canvas!: HTMLCanvasElement;
  private _elements: Array<ElementBase> = [];

  public init(canvas: HTMLCanvasElement, elements: Array<ElementBase> = []) {
    if (canvas instanceof HTMLCanvasElement) {
      this._canvas = canvas;
      this._canvas.height = this._canvas.clientHeight;
      this._canvas.width = this._canvas.clientWidth;
      let context: CanvasRenderingContext2D | null;
      if (!(context = canvas.getContext('2d')))
        throw TypeError('Please provide valid canvas element');
      this._ctx = context;
      this._elements = elements || [];

      this.render();
    } else {
      throw TypeError('Must provide valid canvas element');
    }
  }

  private drawPreviw(elem: ElementBase) {
    this.render();
    elem.drawTry(this._ctx);
  }

  public renderPreviw(
    type: SelectOptions,
    x: number,
    y: number,
    h: number,
    w: number
  ) {
    const path = ElementFactory.createElement(type, { x, y, h, w });
    if (path) {
      this.drawPreviw(path);
    }
  }

  public addElement(elem: ElementBase) {
    this._elements.push(elem);
    this.render();
  }

  public removeElem(elemName: string) {
    this._elements = this._elements.filter((v) => {
      return v.name != elemName;
    });
  }

  public clear() {
    this._ctx.clearRect(
      0,
      0,
      this._canvas.clientWidth,
      this._canvas.clientHeight
    );
    this._elements = [];
  }

  public render() {
    this._ctx.clearRect(
      0,
      0,
      this._canvas.clientWidth,
      this._canvas.clientHeight
    );

    for (const element of this._elements) {
      element.draw(this._ctx);
    }
  }
}
